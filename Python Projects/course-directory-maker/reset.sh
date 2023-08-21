#!/bin/bash

#initialize directory variable
directory=""

for dir in */; do 
    directory="$dir"
    echo "$directory"

    # Check if the specified directory exists
    if [ -d "$directory" ]; then
        # Delete all contents of the directory
        rm -rf "$directory"/*
        echo "Contents of '$directory' deleted."
    else
        echo "Directory '$directory' does not exist."
    fi

done

