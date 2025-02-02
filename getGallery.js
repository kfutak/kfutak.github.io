
const imageData = [
    {
        "path": "./media/gallery/bridge11282024.jpg",
        "alt": "Pedestrian bridge",
        "caption": "Bob Kerrey Pedestrian Bridge",
        "date": "11/28/2024"
    },
    {
        "path": "./media/gallery/flowers09142024.jpg",
        "alt": "Flowers",
        "caption": "Morning Glory Flowers",
        "date": "09/14/2024"
    },
    {
        "path": "./media/gallery/mtevans108102024.jpg",
        "alt": "Mountains",
        "caption": "Mount Blue Sky (overlooking Summit Lake)",
        "date": "08/10/2024"
    },
    {
        "path": "./media/gallery/goats108102024.jpg",
        "alt": "Mountain goat",
        "caption": "Mountain Goat at Mount Blue Sky",
        "date": "08/10/2024"
    },
    {
        "path": "./media/gallery/goats208102024.jpg",
        "alt": "Mountain goats",
        "caption": "Mountain Goats at Mount Blue Sky",
        "date": "08/10/2024"
    },
    {
        "path": "./media/gallery/goats308102024.jpg",
        "alt": "Mountain goats",
        "caption": "Mountain Goats at Mount Blue Sky",
        "date": "08/10/2024"
    }
]

// Creates and displays a gallery item from imageData
/* <div class="gallery">
        <a target="_blank" href="./media/gallery/bridge11282024.jpg">
            <img src="./media/gallery/bridge11282024.jpg" alt="Pedestrian bridge">
        </a>
        <div class="description"><b>Bob Kerrey Pedestrian Bridge</b><br>11/28/2024</div>
</div> */
function displayImage(data) {
    // Creates a div of class gallery
    const galleryDiv = document.createElement("div");
    galleryDiv.classList.add("gallery");

    // Creates the anchor element for the image
    const anchor = document.createElement("a");
    anchor.href = data.path;
    anchor.target = "_blank";

    // Creates the image element
    const img = document.createElement("img");
    img.src = data.path;
    img.alt = data.alt;

    // Puts the image inside the anchor tags
    anchor.appendChild(img);

    // Create description div
    const descDiv = document.createElement("div");
    descDiv.classList.add("description");
    descDiv.innerHTML = `<b>${data.caption}</b><br>${data.date}`;

    // Puts the link (with image) and description inside the gallery div
    galleryDiv.appendChild(anchor);
    galleryDiv.appendChild(descDiv);

    // Puts the gallery div inside the gallery-box
    document.getElementById("gallery-box").appendChild(galleryDiv);
}

// Loop through the imageData to display all images/descriptions with displayImage
for (const image of imageData) {
    displayImage(image);
}