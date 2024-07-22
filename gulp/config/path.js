import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder   = "./src";

export const path = {
    build: {
        js      : `${buildFolder}/js/`,
        css     : `${buildFolder}/css/`,
        html    : `${buildFolder}/`,
        images  : `${buildFolder}/img/`,
        svg     : `${srcFolder}/img/svg/`,
        fonts   : `${buildFolder}/fonts/`,
        videos  : `${buildFolder}/videos/`,
        favicons: `${buildFolder}/img/favicons/`,
    },
    src: {
        js      : `${srcFolder}/js/app.js`,
        html    : `${srcFolder}/pages/*.html`,
        scss    : `${srcFolder}/scss/style.scss`,
        images  : `${srcFolder}/blocks/**/*.{jpg,jpeg,png,gif,webp,avif}`,
        svg     : `${srcFolder}/blocks/**/*.svg`,
        videos  : `${srcFolder}/blocks/**/*.mp4`,
        favicons: `${srcFolder}/favicons/*.*`,
    },
    watch: {
        js      : `${srcFolder}/**/*.js`,
        html    : `${srcFolder}/**/*.html`,
        scss    : `${srcFolder}/**/*.scss`,
        images  : `${srcFolder}/blocks/**/*.{jpg,jpeg,png,gif,webp,avif}`,
        svg     : `${srcFolder}/blocks/**/*.svg`,
        videos  : `${srcFolder}/blocks/**/*.mp4`,
        favicons: `${srcFolder}/img/favicons/*.*`,
    },
    clean      : buildFolder,
    buildFolder: buildFolder,
    srcFolder  : srcFolder,
    rootFolder : rootFolder,
    ftp        : "",
}