#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images/questions

# Download Hanoi image
curl -o public/images/questions/hanoi.jpg "https://images.pexels.com/photos/2360596/pexels-photo-2360596.jpeg"

# Download Vietnam map image
curl -o public/images/questions/vietnam-map.jpg "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Vietnam_location_map.svg/800px-Vietnam_location_map.svg.png"

# Download Pho image
curl -o public/images/questions/pho.jpg "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pho-Beef-Noodles-2008.jpg/800px-Pho-Beef-Noodles-2008.jpg"
