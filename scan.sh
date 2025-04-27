#!/bin/bash

output_file="data.txt"

# Start writing to the file
echo "const data = {" > "$output_file"

first_folder=true

# Collect all folders first
folders=()
while IFS= read -r dir; do
    # Skip current directory '.'
    if [[ "$dir" != "." ]]; then
        folders+=("$dir")
    fi
done < <(find . -type d)

total_folders=${#folders[@]}
current=0

# Now loop through all folders
for dir in "${folders[@]}"; do
    ((current++))

    # Show progress
    echo "Processing [$current/$total_folders]: $dir"

    images=()
    while IFS= read -r file; do
        images+=("\"$(basename "$file")\"")
    done < <(find "$dir" -maxdepth 1 \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | sort)

    # Skip if no images
    if [ ${#images[@]} -eq 0 ]; then
        continue
    fi

    # Add comma between folders if needed
    if [ "$first_folder" = false ]; then
        echo "," >> "$output_file"
    fi
    first_folder=false

    # Write folder and its images
    folder_name=$(basename "$dir")
    echo "    \"$folder_name\": [${images[*]}]" >> "$output_file"
done

# Close the object
echo >> "$output_file"
echo "};" >> "$output_file"

echo "Done! Data saved to $output_file 🎉"
