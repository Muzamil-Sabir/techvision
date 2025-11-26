# 📸 Image and Video Asset Guide

This file contains recommendations for all images and videos needed for the TechVision Solutions website.

## 🎬 Video Assets

### 1. Hero Background Video (`assets/videos/hero-bg.mp4`)
**Location:** Hero Section (Home page background)
**Specifications:**
- Resolution: 1920x1080px (Full HD)
- Duration: 10-30 seconds (looping)
- Format: MP4 (H.264 codec)
- File Size: Under 5MB (compressed)
- Frame Rate: 30fps
- Content: Abstract tech animation, digital particles, flowing code, or futuristic elements

**Recommended Search Terms:**
- "Technology background video"
- "Abstract digital animation"
- "Code matrix animation"
- "Tech particles floating"
- "Futuristic network animation"
- "Digital transformation video"

**Free Video Sources:**
- Pexels: https://www.pexels.com/videos/search/technology/
- Coverr: https://coverr.co/videos/technology
- Pixabay: https://pixabay.com/videos/search/technology/
- Videezy: https://www.videezy.com/

---

## 🖼️ Image Assets

### 1. Team Collaboration Image (`assets/images/team-collaboration.jpg`)
**Location:** About Us Section
**Specifications:**
- Dimensions: 1200x1200px (Square) or 1200x1600px (Portrait)
- Format: JPG or WebP
- File Size: Under 200KB (optimized)
- Content: Team working together, collaboration, office environment, diverse team

**Recommended Search Terms:**
- "Software development team"
- "Tech team collaboration"
- "Developers working together"
- "Office teamwork"
- "Technology professionals"
- "Diverse tech team"

**Free Image Sources:**
- Unsplash: https://unsplash.com/s/photos/team-collaboration
- Pexels: https://www.pexels.com/search/team%20collaboration/
- Pixabay: https://pixabay.com/images/search/teamwork/

---

### 2. Journey Background Image (`assets/images/journey-bg.jpg`)
**Location:** Journey Section (Parallax Background)
**Specifications:**
- Dimensions: 1920x1080px (Landscape)
- Format: JPG or WebP
- File Size: Under 300KB (optimized)
- Content: Subtle tech pattern, abstract background, office space, or cityscape
- Style: Should be subtle as it's used with 0.05 opacity

**Recommended Search Terms:**
- "Abstract tech background"
- "Technology pattern"
- "Modern office space"
- "Digital network background"
- "Tech city skyline"
- "Innovation background"

---

## 🎨 Additional Image Recommendations (Optional Enhancements)

### 3. Service Icons (Optional - Currently using SVG)
You can replace SVG icons with custom images if preferred:
- Web Development icon
- Mobile App icon
- Desktop App icon
- AI Solutions icon
- Design icon
- Support icon

**Specifications:** 512x512px PNG with transparent background

---

### 4. Logo (Optional Enhancement)
Create a logo for "TechVision Solutions" to replace text logo:
**Location:** Navigation bar
**Specifications:**
- Dimensions: 200x60px (or proportional)
- Format: PNG with transparent background
- Style: Should match the cyan/purple color scheme

---

## 🛠️ Image Optimization Tools

Before adding images to your website, optimize them:

### Online Tools (Free):
1. **TinyPNG** - https://tinypng.com/
   - Great for PNG and JPG compression
   - Drag and drop interface

2. **Squoosh** - https://squoosh.app/
   - Google's image optimization tool
   - Supports multiple formats including WebP

3. **Compressor.io** - https://compressor.io/
   - Up to 90% compression
   - Maintains quality

### Desktop Tools:
1. **GIMP** (Free) - Image editing
2. **Photoshop** (Paid) - Professional editing
3. **Paint.NET** (Free, Windows) - Simple editing

---

## 📐 Quick Image Editing Guide

### Resize Images:
```
Using Online Tool (Resizer.com):
1. Go to https://imageresizer.com/
2. Upload your image
3. Enter desired dimensions
4. Download resized image
```

### Convert to WebP:
```
Using CloudConvert:
1. Go to https://cloudconvert.com/jpg-to-webp
2. Upload your JPG/PNG
3. Convert to WebP
4. Download optimized image
```

---

## 🎯 How to Add Your Images

### Step 1: Prepare Your Images
1. Download/create your images
2. Optimize them using tools above
3. Rename them exactly as specified:
   - `team-collaboration.jpg`
   - `journey-bg.jpg`
   - `hero-bg.mp4`

### Step 2: Add to Project
1. Place images in `assets/images/` folder
2. Place video in `assets/videos/` folder

### Step 3: Verify
1. Open `index.html` in browser
2. Check if images are displaying
3. Check browser console for any errors

---

## 🎬 Video Compression Guide

If your video is too large (over 5MB):

### Using Online Tool (Free):
1. **Clipchamp** - https://clipchamp.com/en/video-compressor/
   - Upload your video
   - Select "Web" preset
   - Download compressed version

2. **FreeConvert** - https://www.freeconvert.com/video-compressor
   - Upload video
   - Adjust quality settings
   - Download

### Using FFmpeg (Advanced):
```bash
# Compress video to under 5MB
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -b:v 800k output.mp4
```

---

## 📱 Responsive Image Tips

The website will automatically handle responsive sizing, but for best results:

1. **Hero Video**: Ensure it looks good on mobile (vertical crops will happen)
2. **Team Image**: Center important elements (will be cropped on mobile)
3. **Background Images**: Use subtle patterns that work at any size

---

## 🌟 Pro Tips

1. **Color Matching**: Use images that complement the cyan/purple color scheme
2. **Consistency**: Keep a consistent style across all images
3. **Quality**: High resolution is better (we'll optimize it)
4. **Lighting**: Bright, well-lit images work best
5. **Focus**: Ensure main subjects are clearly visible

---

## ✅ Final Checklist

Before launching your website:

- [ ] All images are optimized (under 200KB each)
- [ ] Video is optimized (under 5MB)
- [ ] Images are in correct folders
- [ ] File names match exactly
- [ ] Images display correctly on desktop
- [ ] Images display correctly on mobile
- [ ] Video autoplays and loops
- [ ] All images are properly licensed for commercial use

---

## 🆘 Need Help?

**Image not showing?**
1. Check file path in HTML matches file location
2. Verify file extension (.jpg vs .jpeg)
3. Check browser console for 404 errors
4. Ensure file names are lowercase

**Video not playing?**
1. Convert to MP4 with H.264 codec
2. Ensure file path is correct
3. Check file size (should be under 10MB)
4. Try different browser

---

**Remember:** You can always start with placeholder images and replace them later. The website will work perfectly even without custom images - just the layout might look different until you add them.

Good luck with your amazing website! 🚀