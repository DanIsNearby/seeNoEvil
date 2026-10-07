# seeNoEvil 🙈

A tiny Chrome extension that hides the "Abstract is shutting down" modal on `abs.xyz` and all of its subdomains.

## Why

This exists because of the predatory Terms of Service on [portal.abs.xyz](https://portal.abs.xyz). The shutdown notice is a modal that won't let you click **Continue** until you tick _"I have read and agree to the Terms of Service"_.

Read about it here:

- https://x.com/yesyes/status/2107642679500943683
- https://x.com/degenlegendmfer/status/2107696658037276900

seeNoEvil only hides the modal. It never ticks the checkbox or clicks **Continue**.

To move your assets, go to [migrate.abs.xyz](https://migrate.abs.xyz) directly.

## Install

1. Clone this repo, or download it as a ZIP and unzip it.
2. Open `chrome://extensions`.
3. Turn on **Developer mode** (top right).
4. Click **Load unpacked** and select this folder.

Works in any Chromium browser (Chrome, Brave, Edge, Arc).

## How it works

- [`content.css`](content.css) hides the modal the instant it is inserted, so it never flashes on screen. It matches the modal by its artwork, because the class names are hashed CSS-module names that change on every deploy.
- [`content.js`](content.js) keeps watching the page with a `MutationObserver` and catches any modal whose text reads "Abstract is shutting down", in case the artwork changes.

The modal is hidden rather than deleted. It's a React portal, and pulling its node out from under React crashes the app when it tries to unmount it.

No permissions, no network requests, no data collected. It's three small files; read them.
