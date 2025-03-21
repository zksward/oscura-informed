# Theme Development TODOs

## Research & Reference
- [x] Prepare original theme files for comparison
    - themes/original.json
- [x] Document company's color palette (purple, slate, and green)
    - themes/informed-colors.js
- [x] Extract context from Twitter thread about developer themes as marketing
    - claudecode/context.md
- [x] Add Gruvbox theme as design inspiration
    - themes/gruvbox-dark-medium.json

## Theme Development
- [x] Compare current theme with original
- [x] Adjust colors to better match company palette
    - Updated status bar and activity bar colors
    - Enhanced color comments to reference company palette
- [x] Improve consistency across UI elements
    - Standardized main background to slate.800 
    - Fixed mismatched UI elements
    - Created better visual hierarchy with active/inactive states
- [x] Create Gruvbox-inspired theme with company colors
    - Created informed-gruvbox.json theme
    - Developed color-generator.js tool for blending palettes
    - Added to package.json as available theme
- [ ] Test themes in different language contexts
- [ ] Create side-by-side screenshots for comparison
- [ ] Improve contrast ratios if needed for accessibility
- [ ] Refine Informed Gruvbox theme based on usage feedback

## Documentation
- [x] Update theme description with color palette reference
- [x] Document color mapping decisions in comments
- [x] Add references to inspiration themes in package.json
- [x] Update CHANGELOG.md with new theme additions
- [ ] Update README with development context
- [ ] Create before/after comparisons
- [ ] Add instructions for using the color generator tool