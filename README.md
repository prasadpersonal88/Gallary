# Vertical Full-Screen Photo Gallery

This is a mobile-first gallery for anyone with the published link. Swipe **up** for the next photo and **down** for the previous photo.

## Add photos
1. Put your image files in the `images/` folder.
2. Edit `PHOTOS` in `script.js` so each `src` matches the exact file name:
   ```js
   const PHOTOS = [
     { src: "images/beach.jpg", caption: "Beach day" },
     { src: "images/friends.png", caption: "Good times" }
   ];
   ```
3. File names are case-sensitive. Replace the three sample entries with your own.

## Publish on GitHub Pages
1. Create a repository, e.g. `my-photo-gallery`.
2. Upload `index.html`, `style.css`, `script.js`, `README.md`, and the `images` folder.
3. Commit to branch `main`.
4. Open **Settings → Pages**.
5. Select **Deploy from a branch**, branch `main`, folder `/(root)`, then Save.
6. GitHub will show a public URL similar to `https://YOUR-USERNAME.github.io/my-photo-gallery/`.

Share that URL. Anyone with the link can view without signing in. Open it in Chrome on your phone.

## Privacy
GitHub Pages is public and is not password-protected. Anyone who gets the URL may view the photos. Do not upload private or sensitive images.
