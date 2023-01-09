// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// This contract allows users to submit URLs and upvote or downvote them
contract URLRegistry {
    // The mapping of URLs to their metadata
    mapping (string => URL) public urlToMetadata;

    // The array of all submitted URLs, sorted by vote count
    URL[] public urlArray;

    // Struct to store metadata for a URL
    struct URL {
        string url;
        int voteCount;
    }

    // Function to submit a new URL
    function submitURL(string memory _url) public {
        // Check if the URL has already been submitted
        require(keccak256(bytes(urlToMetadata[_url].url)) == keccak256(bytes("")), "URL has already been submitted");

        // Create a new URL struct and store it in the mapping
        urlToMetadata[_url] = URL(_url, 0);

        // Add the URL to the array of all submitted URLs
        urlArray.push(urlToMetadata[_url]);
    }

    // Function to upvote a URL
    function upvoteURL(string memory _url) public {
        // Increment the vote count for the URL
        urlToMetadata[_url].voteCount++;

        // Re-sort the array of URLs by vote count
        sortURLArray();
    }

    // Function to downvote a URL
    function downvoteURL(string memory _url) public {
        // Decrement the vote count for the URL
        urlToMetadata[_url].voteCount--;

        // Re-sort the array of URLs by vote count
        sortURLArray();
    }

    // Helper function to sort the array of URLs by vote count
    function sortURLArray() private {
        // Sort the array in place using a bubble sort algorithm
        for (uint i = 0; i < urlArray.length; i++) {
            for (uint j = i + 1; j < urlArray.length; j++) {
                if (urlArray[i].voteCount < urlArray[j].voteCount) {
                    // Swap the URLs
                    URL memory temp = urlArray[i];
                    urlArray[i] = urlArray[j];
                    urlArray[j] = temp;
                }
            }
        }
    }

    // Function to return the top 10 URLs
    function getTopURLs() public view returns (string[] memory) {
        // Return a slice of the array with the top 10 URLs
        string[] memory top10 = new string[](urlArray.length);
        for(uint i = 0; i < 10; i++) {
            top10[i] = urlArray[i].url;
        }
        return top10;
    }

    // return all urls
    function allURLs() public view returns (string[] memory) {
        string[] memory all_urls = new string[](urlArray.length);
        for(uint i =0; i < urlArray.length; i++){
            all_urls[i] = urlArray[i].url;
        }
        return all_urls;
    }
}
