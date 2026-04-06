#!/bin/bash

# Create a directory to save images
mkdir -p adventhcg_images
cd adventhcg_images

BASE="https://adventhcg.com/wp-content/uploads/revslider/project"

images=(
    "Picture1.png"
    "Picture2.png"
    "Picture3.png"
    "Picture9.png"
    "Picture10.png"
    "Picture11.png"
    "Picture12.png"
    "Picture1.1.png"
    "Picture4.png"
    "Picture1.2.png"
    "Picture5.png"
    "Picture6.png"
    "Picture1.3.jpg"
    "Picture1.4.jpg"
    "Picture1.5.jpg"
    "Resized-1EF2Z.jpg"
    "Picture1.6.png"
    "Picture1.8.png"
)

echo "Starting downloads..."

for img in "${images[@]}"; do
    echo "Downloading $img..."
    curl -O --silent --show-error "${BASE}/${img}"
    if [ $? -eq 0 ]; then
        echo "✅ Downloaded: $img"
    else
        echo "❌ Failed: $img"
    fi
done

echo ""
echo "Done! Images saved in: $(pwd)"
