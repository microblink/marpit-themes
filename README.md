# Microblink Marpit presentation themes
This repository contains [Marpit](https://marpit.marp.app) themes for Microblink presentations.

# Usage in Visual Studio Code

1. Install [this VSCode extension](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode)

2. Open command pallete and select **Open Settings (JSON)**

3. Add following entry to the opened JSON file:

    ```json
    "markdown.marp.themes": [
        "https://raw.githubusercontent.com/microblink/marpit-themes/v2.0.0/styles/output/microblink.css"
    ]
    ```

If you do not wish to use `v2.0.0` of the theme file, replace `v2.0.0` in the above link with either branch name or different version.

You can see all available versions in [releases tab](https://github.com/microblink/marpit-themes/releases).


# Usage with docker

1. Have docker

2. Generate a `.pdf` with the [marpteam/marp-cli](https://hub.docker.com/r/marpteam/marp-cli/) image by running the following in a shell:

```bash
$> docker run --rm --init -e MARP_USER="$(id -u):$(id -g)" -v $PWD:/home/marp/app marpteam/marp-cli -w sample/sample-slides.md --pdf --theme styles/output/microblink.css --allow-local-files
[ INFO ] [Watch mode] Start watching...
...
```

3. Open the `sample/sample-slides.pdf` in a `pdf` viewer of your choice (preferably one with auto-reload)

E.g.
```
$> zathura sample/sample-slides.pdf
```

The `docker container` will check every so often for changes in the `sample-slides.md` and generate a new `pdf` if needed.
