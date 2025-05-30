// Simulated data: You can replace this part with your real folder/files list.
const data = {
    "hBP01": ["hBP01-001_OSR.png", "hBP01-001_OUR.png", "hBP01-002_OSR.png", "hBP01-002_OUR.png", "hBP01-003_OSR.png", "hBP01-003_OUR.png", "hBP01-004_OSR.png", "hBP01-004_OUR.png", "hBP01-005_OSR.png", "hBP01-005_OUR.png", "hBP01-006_OSR.png", "hBP01-006_OUR.png", "hBP01-006_SEC.png", "hBP01-007_OSR.png", "hBP01-007_OUR.png", "hBP01-007_SEC.png", "hBP01-008_OSR.png", "hBP01-008_OUR.png", "hBP01-009_C.png", "hBP01-010_U.png", "hBP01-011_C.png", "hBP01-012_U.png", "hBP01-013_R.png", "hBP01-014_RR.png", "hBP01-014_UR.png", "hBP01-015_C.png", "hBP01-016_U.png", "hBP01-017_C.png", "hBP01-018_C.png", "hBP01-019_U.png", "hBP01-020_R.png", "hBP01-021_C.png", "hBP01-022_U.png", "hBP01-023_RR.png", "hBP01-023_UR.png", "hBP01-024_C.png", "hBP01-025_C.png", "hBP01-026_U.png", "hBP01-027_RR.png", "hBP01-027_UR.png", "hBP01-028_C.png", "hBP01-029_C.png", "hBP01-030_U.png", "hBP01-031_R.png", "hBP01-032_C.png", "hBP01-033_U.png", "hBP01-034_C.png", "hBP01-035_C.png", "hBP01-036_U.png", "hBP01-037_R.png", "hBP01-038_C.png", "hBP01-039_U.png", "hBP01-040_C.png", "hBP01-041_U.png", "hBP01-042_R.png", "hBP01-043_RR.png", "hBP01-043_UR.png", "hBP01-044_C.png", "hBP01-045_U.png", "hBP01-046_C.png", "hBP01-047_RR.png", "hBP01-047_UR.png", "hBP01-048_C.png", "hBP01-049_C.png", "hBP01-050_U.png", "hBP01-051_RR.png", "hBP01-051_UR.png", "hBP01-052_C.png", "hBP01-053_C.png", "hBP01-054_U.png", "hBP01-055_R.png", "hBP01-056_C.png", "hBP01-057_U.png", "hBP01-058_C.png", "hBP01-059_C.png", "hBP01-060_U.png", "hBP01-061_R.png", "hBP01-062_C.png", "hBP01-063_U.png", "hBP01-064_C.png", "hBP01-065_U.png", "hBP01-066_R.png", "hBP01-067_RR.png", "hBP01-067_UR.png", "hBP01-068_C.png", "hBP01-069_C.png", "hBP01-070_U.png", "hBP01-071_RR.png", "hBP01-071_UR.png", "hBP01-072_C.png", "hBP01-073_C.png", "hBP01-074_U.png", "hBP01-075_R.png", "hBP01-076_C.png", "hBP01-077_U.png", "hBP01-078_C.png", "hBP01-079_U.png", "hBP01-080_R.png", "hBP01-081_RR.png", "hBP01-081_UR.png", "hBP01-082_C.png", "hBP01-083_U.png", "hBP01-084_C.png", "hBP01-085_C.png", "hBP01-086_U.png", "hBP01-087_R.png", "hBP01-088_C.png", "hBP01-089_C.png", "hBP01-090_U.png", "hBP01-091_RR.png", "hBP01-091_UR.png", "hBP01-092_C.png", "hBP01-093_C.png", "hBP01-094_U.png", "hBP01-095_R.png", "hBP01-096_R.png", "hBP01-097_R.png", "hBP01-098_R.png", "hBP01-099_R.png", "hBP01-100_C.png", "hBP01-101_C.png", "hBP01-102_U.png", "hBP01-103_U.png", "hBP01-104_C.png", "hBP01-105_U.png", "hBP01-106_U.png", "hBP01-107_C.png", "hBP01-108_U.png", "hBP01-109_U.png", "hBP01-110_U.png", "hBP01-111_U.png", "hBP01-112_U.png", "hBP01-113_U.png", "hBP01-114_C.png", "hBP01-115_U.png", "hBP01-116_C.png", "hBP01-117_C.png", "hBP01-118_C.png", "hBP01-119_C.png", "hBP01-120_C.png", "hBP01-121_C.png", "hBP01-122_C.png", "hBP01-123_C.png", "hBP01-124_C.png", "hBP01-125_C.png", "hBP01-126_C.png", "hSD01-016_C.png", "hSD01-019_C.png", "hSD01-020_C.png", "hY01-001_C.png", "hY02-001_C.png", "hY03-001_C.png", "hY04-001_C.png"],
    
    "hBP02": ["hBP02-001_OSR.png", "hBP02-002_OSR.png", "hBP02-003_OSR.png", "hBP02-004_OSR.png", "hBP02-005_OSR.png", "hBP02-006_OSR.png", "hBP02-007_OSR.png", "hBP02-008_C.png", "hBP02-009_U.png", "hBP02-010_C.png", "hBP02-011_U.png", "hBP02-012_R.png", "hBP02-013_RR.png", "hBP02-014_C.png", "hBP02-015_C.png", "hBP02-016_U.png", "hBP02-017_RR.png", "hBP02-018_C.png", "hBP02-019_U.png", "hBP02-020_C.png", "hBP02-021_U.png", "hBP02-022_R.png", "hBP02-023_RR.png", "hBP02-024_C.png", "hBP02-025_C.png", "hBP02-026_U.png", "hBP02-027_RR.png", "hBP02-028_C.png", "hBP02-028_P.png", "hBP02-029_U.png", "hBP02-030_C.png", "hBP02-031_U.png", "hBP02-032_R.png", "hBP02-033_RR.png", "hBP02-034_RR.png", "hBP02-035_C.png", "hBP02-036_U.png", "hBP02-037_C.png", "hBP02-038_U.png", "hBP02-039_R.png", "hBP02-040_RR.png", "hBP02-041_RR.png", "hBP02-042_C.png", "hBP02-043_U.png", "hBP02-044_C.png", "hBP02-045_U.png", "hBP02-046_R.png", "hBP02-047_RR.png", "hBP02-048_C.png", "hBP02-049_U.png", "hBP02-050_C.png", "hBP02-051_U.png", "hBP02-052_R.png", "hBP02-053_RR.png", "hBP02-054_C.png", "hBP02-055_U.png", "hBP02-056_C.png", "hBP02-057_U.png", "hBP02-058_R.png", "hBP02-059_RR.png", "hBP02-060_R.png", "hBP02-061_C.png", "hBP02-062_C.png", "hBP02-063_U.png", "hBP02-064_RR.png", "hBP02-065_C.png", "hBP02-066_C.png", "hBP02-067_U.png", "hBP02-068_R.png", "hBP02-069_R.png", "hBP02-070_R.png", "hBP02-071_R.png", "hBP02-072_R.png", "hBP02-073_R.png", "hBP02-074_R.png", "hBP02-075_U.png", "hBP02-076_C.png", "hBP02-077_C.png", "hBP02-078_U.png", "hBP02-079_U.png", "hBP02-080_U.png", "hBP02-081_U.png", "hBP02-082_U.png", "hBP02-083_U.png", "hBP02-084_U.png", "hBP02-085_U.png", "hBP02-086_C.png", "hBP02-087_C.png", "hBP02-088_U.png", "hBP02-089_C.png", "hBP02-090_C.png", "hBP02-091_C.png", "hBP02-092_U.png", "hBP02-093_C.png", "hBP02-094_C.png", "hBP02-095_C.png", "hBP02-096_C.png", "hBP02-097_C.png", "hBP02-098_C.png", "hBP02-099_C.png", "hBP02-100_C.png", "hBP02-101_C.png", "hBP02-102_C.png"],
        
    "hBP03": ["hBP03-001_OSR.png", "hBP03-002_OSR.png", "hBP03-003_OSR.png", "hBP03-004_OSR.png", "hBP03-005_OSR.png", "hBP03-006_OSR.png", "hBP03-007_OSR.png", "hBP03-008_OSR.png", "hBP03-009_C.png", "hBP03-010_U.png", "hBP03-011_C.png", "hBP03-012_U.png", "hBP03-013_R.png", "hBP03-014_RR.png", "hBP03-015_RR.png", "hBP03-016_C.png", "hBP03-017_U.png", "hBP03-018_C.png", "hBP03-019_U.png", "hBP03-020_R.png", "hBP03-021_RR.png", "hBP03-022_R.png", "hBP03-023_R.png", "hBP03-024_RR.png", "hBP03-025_C.png", "hBP03-026_U.png", "hBP03-027_C.png", "hBP03-028_U.png", "hBP03-029_R.png", "hBP03-030_RR.png", "hBP03-031_C.png", "hBP03-032_C.png", "hBP03-033_U.png", "hBP03-034_RR.png", "hBP03-035_R.png", "hBP03-036_R.png", "hBP03-037_C.png", "hBP03-038_C.png", "hBP03-039_R.png", "hBP03-040_C.png", "hBP03-041_C.png", "hBP03-042_U.png", "hBP03-043_RR.png", "hBP03-044_RR.png", "hBP03-045_R.png", "hBP03-046_C.png", "hBP03-047_C.png", "hBP03-048_U.png", "hBP03-049_R.png", "hBP03-050_R.png", "hBP03-051_C.png", "hBP03-052_U.png", "hBP03-053_C.png", "hBP03-054_U.png", "hBP03-055_R.png", "hBP03-056_RR.png", "hBP03-057_C.png", "hBP03-058_C.png", "hBP03-059_U.png", "hBP03-060_R.png", "hBP03-061_C.png", "hBP03-062_U.png", "hBP03-063_C.png", "hBP03-064_U.png", "hBP03-065_R.png", "hBP03-066_RR.png", "hBP03-067_C.png", "hBP03-068_U.png", "hBP03-069_C.png", "hBP03-070_U.png", "hBP03-071_R.png", "hBP03-072_RR.png", "hBP03-073_C.png", "hBP03-074_U.png", "hBP03-075_C.png", "hBP03-076_U.png", "hBP03-077_R.png", "hBP03-078_RR.png", "hBP03-079_RR.png", "hBP03-080_C.png", "hBP03-081_C.png", "hBP03-082_U.png", "hBP03-083_R.png", "hBP03-084_U.png", "hBP03-085_U.png", "hBP03-086_C.png", "hBP03-087_C.png", "hBP03-088_U.png", "hBP03-089_U.png", "hBP03-090_U.png", "hBP03-091_U.png", "hBP03-092_U.png", "hBP03-093_U.png", "hBP03-094_U.png", "hBP03-095_C.png", "hBP03-096_U.png", "hBP03-097_C.png", "hBP03-098_U.png", "hBP03-099_C.png", "hBP03-100_C.png", "hBP03-101_C.png", "hBP03-102_U.png", "hBP03-103_C.png", "hBP03-104_C.png", "hBP03-105_U.png", "hBP03-106_C.png", "hBP03-107_U.png", "hBP03-108_C.png", "hBP03-109_C.png", "hBP03-110_U.png", "hBP03-111_C.png", "hBP03-112_U.png", "hBP03-113_C.png"],
    
    "hSD01": ["hSD01-001_OSR.png", "hSD01-002_OSR.png", "hSD01-003_C.png", "hSD01-004_R.png", "hSD01-005_U.png", "hSD01-006_RR.png", "hSD01-007_C.png", "hSD01-008_C.png", "hSD01-009_R.png", "hSD01-010_U.png", "hSD01-011_RR.png", "hSD01-012_C.png", "hSD01-013_R.png", "hSD01-014_U.png", "hSD01-015_U.png", "hSD01-016_C.png", "hSD01-017_C.png", "hSD01-018_C.png", "hSD01-019_C.png", "hSD01-020_C.png", "hSD01-021_C.png", "hY01-001_C.png", "hY02-001_C.png"],
    
    "hSD02": ["hSD02-001_OC.png", "hSD02-002_C.png", "hSD02-003_C.png", "hSD02-004_U.png", "hSD02-005_C.png", "hSD02-006_C.png", "hSD02-007_U.png", "hSD02-008_R.png", "hSD02-009_RR.png", "hSD02-010_U.png", "hSD02-011_U.png", "hSD02-012_U.png", "hSD02-013_C.png", "hSD02-014_C.png"],
    
    "hSD03": ["hSD03-001_OC.png", "hSD03-002_C.png", "hSD03-003_C.png", "hSD03-004_U.png", "hSD03-005_C.png", "hSD03-006_C.png", "hSD03-007_U.png", "hSD03-008_R.png", "hSD03-009_RR.png", "hSD03-010_U.png", "hSD03-011_U.png", "hSD03-012_U.png", "hSD03-013_C.png", "hSD03-014_C.png"],
    
    "hSD04": ["hSD04-001_OC.png", "hSD04-002_C.png", "hSD04-003_C.png", "hSD04-004_U.png", "hSD04-005_C.png", "hSD04-006_C.png", "hSD04-007_U.png", "hSD04-008_R.png", "hSD04-009_RR.png", "hSD04-010_U.png", "hSD04-011_U.png", "hSD04-012_U.png", "hSD04-013_C.png", "hSD04-014_C.png"],
    
    "hSD05": ["hPR-002_U.png", "hSD05-001_OC.png", "hSD05-002_C.png", "hSD05-003_C.png", "hSD05-004_U.png", "hSD05-005_C.png", "hSD05-006_C.png", "hSD05-007_U.png", "hSD05-008_R.png", "hSD05-009_RR.png", "hSD05-010_U.png", "hSD05-011_U.png", "hSD05-012_U.png", "hSD05-013_U.png", "hSD05-014_C.png"],
    
    "hSD06": ["hSD06-001_OC.png", "hSD06-002_C.png", "hSD06-003_U.png", "hSD06-004_C.png", "hSD06-005_C.png", "hSD06-006_R.png", "hSD06-007_RR.png", "hSD06-008_U.png", "hSD06-009_U.png", "hSD06-010_U.png", "hSD06-011_C.png", "hSD06-012_C.png"],
    
    "hSD07": ["hSD07-001_OC.png", "hSD07-002_C.png", "hSD07-003_C.png", "hSD07-004_U.png", "hSD07-005_C.png", "hSD07-006_C.png", "hSD07-007_U.png", "hSD07-008_R.png", "hSD07-009_RR.png", "hSD07-010_U.png", "hSD07-011_U.png", "hSD07-012_U.png", "hSD07-013_U.png", "hSD07-014_U.png", "hSD07-015_C.png"],
    
    "hY - Cheers": ["hY01-001_C.png", "hY02-001_C.png", "hY03-001_C.png", "hY04-001_C.png", "hY05-001_C.png", "hY06-001_C.png"],
    
    "hYS01": ["hYS01-001_OC.png", "hYS01-002_OC.png", "hYS01-003_OC.png", "hYS01-004_OC.png"]

};


const foldersList = document.getElementById('foldersList');
const imagesList = document.getElementById('imagesList');
const searchInput = document.getElementById('searchInput');

function listFolders() {
    foldersList.innerHTML = '';
    for (const folder in data) {
        const div = document.createElement('div');
        div.className = 'folder';
        div.textContent = folder;
        div.onclick = () => listImages(folder);
        foldersList.appendChild(div);
    }
}

function listImages(folderName) {
    imagesList.innerHTML = `<h2>${folderName}</h2>`;
    const grid = document.createElement('div');
    grid.className = 'image-grid';

    data[folderName].forEach(filename => {
        const item = document.createElement('div');
        item.className = 'image-item';
        
        // Create the image element
        const img = document.createElement('img');
        img.src = `${folderName}/${filename}`;
        img.alt = filename;

        // Create the caption
        const caption = document.createElement('div');
        caption.textContent = filename;
        
        // Add click event to show the image in a pop-out
        img.addEventListener('click', () => {
            showModal(`${folderName}/${filename}`, filename);
        });

        // Append image and caption to item
        item.appendChild(img);
        item.appendChild(caption);
        grid.appendChild(item);
    });

    imagesList.appendChild(grid);
}

// Function to show the modal with the clicked image
function showModal(imageSrc, imageAlt) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const closeBtn = document.createElement('span');
    closeBtn.className = 'close-btn';
    closeBtn.textContent = '×';
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = imageAlt;
    
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(img);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Display the modal
    modal.style.display = 'block';
}

function searchCards() {
    const query = searchInput.value.trim().toLowerCase();
    imagesList.innerHTML = '';

    if (query === '') {
        return;
    }

    const grid = document.createElement('div');
    grid.className = 'image-grid';

    for (const folder in data) {
        data[folder].forEach(filename => {
            if (filename.toLowerCase().includes(query)) {
                const item = document.createElement('div');
                item.className = 'image-item';
                const img = document.createElement('img');
                img.src = `${folder}/${filename}`;
                img.alt = filename;
                const caption = document.createElement('div');
                caption.textContent = filename;
                item.appendChild(img);
                item.appendChild(caption);
                grid.appendChild(item);
            }
        });
    }

    if (grid.children.length > 0) {
        imagesList.appendChild(grid);
    } else {
        imagesList.innerHTML = '<p>No cards found.</p>';
    }
}

searchInput.addEventListener('input', searchCards);

// Initialize
listFolders();
