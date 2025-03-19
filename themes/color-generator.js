// Color Generator Tool for Oscura Informed Theme

// Import the base Informed colors
const InformedColors = {
    /*Native Colors*/
    green: "#35CE99",
    purple: "#8158C9",
    blue: "#4D72CE",
    slate: "#3E4051",
    red: "#F05555",
    orange: "#F1B045",
    yellow: "#F5CF4F",
    darkSlate: "#343647",
    extraSlate: "#26283E",
    menuSlate: "#1E293B",
    // For v2 - a more purple-tinted slate background
    purpleSlate: "#2F2A3F",
    // Gruvbox inspired colors
    gruvboxFg: "#ebdbb2",
    gruvboxBg: "#282828",
    gruvboxGray: "#928374",
    gruvboxRed: "#cc241d",
    gruvboxGreen: "#98971a",
    gruvboxYellow: "#d79921",
    gruvboxBlue: "#458588",
    gruvboxPurple: "#b16286",
    gruvboxAqua: "#689d6a",
    gruvboxOrange: "#d65d0e",
};

/**
 * Mixes two colors together
 * 
 * @param {string} color1 - First hex color
 * @param {string} color2 - Second hex color
 * @param {number} weight - Weight of the first color (0-1)
 * @returns {string} - Resulting hex color
 */
function mixColors(color1, color2, weight = 0.5) {
    // Check if both colors are valid
    if (!color1 || !color2) {
        console.error(`Invalid colors in mixColors: color1=${color1}, color2=${color2}`);
        return "#000000";
    }
    
    // Convert hex to RGB
    const c1 = hexToRgb(color1);
    const c2 = hexToRgb(color2);
    
    // Mix the colors
    const r = Math.round(c1.r * weight + c2.r * (1 - weight));
    const g = Math.round(c1.g * weight + c2.g * (1 - weight));
    const b = Math.round(c1.b * weight + c2.b * (1 - weight));
    
    // Convert back to hex
    return rgbToHex(r, g, b);
}

/**
 * Adjust the brightness of a color
 * 
 * @param {string} color - Hex color to adjust
 * @param {number} percent - Percentage to adjust (-100 to 100)
 * @returns {string} - Adjusted hex color
 */
function adjustBrightness(color, percent) {
    const rgb = hexToRgb(color);
    const factor = 1 + percent / 100;
    
    const r = Math.max(0, Math.min(255, Math.round(rgb.r * factor)));
    const g = Math.max(0, Math.min(255, Math.round(rgb.g * factor)));
    const b = Math.max(0, Math.min(255, Math.round(rgb.b * factor)));
    
    return rgbToHex(r, g, b);
}

/**
 * Converts a hex color to RGB
 * 
 * @param {string} hex - Hex color code
 * @returns {object} - RGB values
 */
function hexToRgb(hex) {
    // Check if hex is defined
    if (!hex) {
        console.error("Undefined hex color provided to hexToRgb");
        return { r: 0, g: 0, b: 0 };
    }
    
    // Remove # if present
    hex = hex.replace(/^#/, '');
    
    // Parse the hex values
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    
    return { r, g, b };
}

/**
 * Converts RGB values to a hex color
 * 
 * @param {number} r - Red value (0-255)
 * @param {number} g - Green value (0-255)
 * @param {number} b - Blue value (0-255)
 * @returns {string} - Hex color code
 */
function rgbToHex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/**
 * Generate a palette that blends Informed colors with Gruvbox-inspired tones
 * 
 * @returns {object} - The generated palette
 */
function generateInformedGruvboxPalette(variant = 'default') {
    const palette = {};
    
    // Create base hybrid colors based on variant
    if (variant === 'purple') {
        // Use the purple-tinted slate background
        palette.bg = mixColors(InformedColors.purpleSlate, InformedColors.gruvboxBg, 0.85);
    } else {
        // Use the default slate background
        palette.bg = InformedColors.menuSlate;
    }
    
    palette.fg = mixColors(InformedColors.gruvboxFg, "#FFFFFF", 0.9); // Slightly whiter gruvbox foreground
    
    // Create syntax token colors that blend Informed with Gruvbox
    // Use more brand green (less gruvbox influence)
    palette.string = mixColors(InformedColors.green, InformedColors.gruvboxGreen, 0.85);
    palette.keyword = mixColors(InformedColors.purple, InformedColors.gruvboxPurple, 0.6);
    palette.function = mixColors(InformedColors.blue, InformedColors.gruvboxBlue, 0.6);
    palette.variable = palette.fg;
    palette.number = mixColors(InformedColors.orange, InformedColors.gruvboxOrange, 0.6);
    palette.comment = mixColors(InformedColors.gruvboxGray || "#928374", "#A0A0A0", 0.8);
    palette.operator = mixColors(InformedColors.yellow, InformedColors.gruvboxYellow, 0.7);
    
    // Fix the purple80 reference
    const purple80 = "#9A79D4"; // Hardcoded value from informed-colors.js
    palette.type = mixColors(purple80, InformedColors.gruvboxPurple, 0.5);
    
    // UI element colors
    palette.activeForeground = palette.fg;
    palette.activeBackground = adjustBrightness(palette.bg, 10);
    palette.inactiveForeground = adjustBrightness(palette.fg, -25);
    palette.selectionBackground = mixColors(InformedColors.purple, InformedColors.gruvboxAqua, 0.2) + '40'; // 40 for alpha
    palette.errorForeground = mixColors(InformedColors.red, InformedColors.gruvboxRed, 0.6);
    palette.warningForeground = mixColors(InformedColors.orange, InformedColors.gruvboxYellow, 0.6);
    palette.infoForeground = mixColors(InformedColors.blue, InformedColors.gruvboxBlue, 0.6);
    palette.accentColor = purple80;
    
    // Generate alpha variants for UI elements
    palette.selectionBackgroundActive = palette.selectionBackground.substring(0, 7) + '60'; // More opaque for active
    palette.lineHighlightBackground = palette.activeBackground + '40'; // Semi-transparent
    
    // Generate border and highlight colors
    palette.border = adjustBrightness(palette.bg, 15);
    palette.activeBorder = palette.accentColor;
    
    return palette;
}

/**
 * Generates a complete set of variations for a given theme palette
 * 
 * @param {object} basePalette - The base palette to create variations from
 * @returns {object} - Complete palette with all variations
 */
function generateVariations(basePalette) {
    const complete = { ...basePalette };
    
    // Create lighter/darker variations of main colors
    complete.bgDarker = adjustBrightness(complete.bg, -10);
    complete.bgLighter = adjustBrightness(complete.bg, 10);
    complete.fgDarker = adjustBrightness(complete.fg, -15);
    complete.fgLighter = adjustBrightness(complete.fg, 5);
    
    // Generate alpha variants
    complete.selectionBackgroundInactive = complete.selectionBackground.substring(0, 7) + '30';
    
    // Status bar variations
    complete.statusBarBackground = complete.bg;
    complete.statusBarForeground = complete.fg;
    complete.statusBarItemHoverBackground = complete.bgLighter;
    
    // More UI element variations
    complete.sideBarBackground = complete.bg;
    complete.sideBarForeground = complete.fgDarker;
    complete.activityBarBackground = complete.bgDarker;
    complete.activityBarForeground = complete.fg;
    complete.tabActiveBackground = complete.bgLighter;
    complete.tabActiveForeground = complete.fg;
    complete.tabInactiveBackground = complete.bg;
    complete.tabInactiveForeground = complete.fgDarker;
    
    return complete;
}

// Generate the default palette
const basePalette = generateInformedGruvboxPalette();
const fullPalette = generateVariations(basePalette);

// Generate the purple variant
const purplePalette = generateInformedGruvboxPalette('purple');
const fullPurplePalette = generateVariations(purplePalette);

// Output the default palette in a nice format
console.log('\nGenerated Informed Gruvbox Palette (Default):');
for (const [key, value] of Object.entries(fullPalette)) {
    console.log(`${key}: ${value}`);
}

// Output the purple variant palette
console.log('\nGenerated Informed Gruvbox Palette (Purple Variant):');
for (const [key, value] of Object.entries(fullPurplePalette)) {
    console.log(`${key}: ${value}`);
}

// Export the palettes for use in themes
module.exports = {
    default: fullPalette,
    purple: fullPurplePalette
};
