# CLAUDE.md - Oscura Informed Theme

## Project Context
- Fork of an existing company-created VS Code theme
- Customizing for our company's purple, slate, and green brand colors
- Developer themes serve as effective brand marketing in tech spaces

## Project Commands
- No build/lint/test commands as this is a VS Code theme
- Use `vsce package` to build the extension package
- Use `vsce publish` to publish to VS Code Marketplace

## Theme Structure
- Theme definition in `themes/oscura-theme.json`
- Package metadata in `package.json`
- Theme follows VS Code's theme color schema

## Style Guidelines
- Follow JSON formatting with 2-space indentation
- Use comments to organize sections in theme files
- Keep hex color values consistent with theme palette:
  - Purple: #8158C9, #9A79D4, #6439AF
  - Green: #35CE99
  - Red: #F05555
  - Orange: #F1B045
  - Slate backgrounds: #26283E, #1E293B, #3E4051

## VS Code Theme Development
- Theme is a VS Code extension focused on dark theme aesthetics
- Colors are organized by UI element types
- Token colors handle syntax highlighting for various languages
- Use semantic naming for colors when possible
- Iterative development tracked in .claudecode/log.md
- Development TODOs in .claudecode/todos.md

## Important things to remember
- always start by looking over the claudecode/ directory to fetch context
- when using the /compact command you will write the analysis and summary components into the claudecode/compaction-log.md for reference