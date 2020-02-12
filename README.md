# Microblink Marpit presentation themes
This repository contains [Marpit](https://marpit.marp.app) themes for Microblink presentations.

# Usage in Visual Studio Code

1. Install [this VSCode extension](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode)

2. Open command pallete and select **Open Settings (JSON)**

3. Add following entry to the opened JSON file:

    ```json
    "markdown.marp.themes": [
        "https://raw.githubusercontent.com/microblink/marpit-themes/v1.1.0/styles/output/microblink.css"
    ]
    ```

If you do not wish to use `v1.1.0` of the theme file, replace `v1.1.0` in the above link with either branch name or different version.

You can see all available versions in [releases tab](https://github.com/microblink/marpit-themes/releases).
