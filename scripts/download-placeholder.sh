#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download placeholder image
curl -L "https://via.placeholder.com/300x200.jpg?text=Loading..." -o "public/images/placeholder.jpg"
