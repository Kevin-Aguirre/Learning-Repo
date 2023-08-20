#!/bin/bash

# Find the first directory in the current directory
target_directory=$(find . -maxdepth 1 -type d -print -quit)

echo "Current directory: $(pwd)"
echo "Target directory found: $target_directory"

if [ -n "$target_directory" ]; then
    echo "Deleting contents of $target_directory..."
    rm -r "$target_directory"/*
    echo "Contents deleted from $target_directory."
else
    echo "No directories found in the current directory."
fi
