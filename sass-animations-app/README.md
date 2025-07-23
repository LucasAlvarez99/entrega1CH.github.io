# SASS Animations App

This project demonstrates the use of SASS to create a variety of CSS animations, transitions, transforms, gradients, and pseudo-classes. It incorporates popular libraries such as Animate.css and AOS.css to enhance the visual effects and user interactions.

## Project Structure

```
sass-animations-app
├── src
│   ├── scss
│   │   ├── main.scss          # Main SASS file that imports all other SCSS partials
│   │   ├── _animations.scss    # Keyframe animations and respective classes
│   │   ├── _transitions.scss    # Transition effects for interactive elements
│   │   ├── _transforms.scss     # CSS transforms like translate, rotate, scale, and skew
│   │   ├── _gradients.scss      # Linear and radial gradient styles
│   │   ├── _pseudo-classes.scss  # Styles for popular pseudo-classes
│   │   └── _variables.scss      # SASS variables for colors, fonts, and reusable values
│   ├── css
│   │   └── main.css            # Compiled CSS output from the SASS files
│   ├── libs
│   │   ├── animate.css         # Animate.css library for pre-defined CSS animations
│   │   └── aos.css             # AOS library for scroll animations
│   └── index.html              # Main HTML file linking to the compiled CSS
├── package.json                 # Configuration file for npm
├── README.md                    # Documentation for the project
└── .gitignore                   # Specifies files and directories to ignore by Git
```

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd sass-animations-app
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Compile SASS to CSS**:
   You can use a SASS compiler to convert the SCSS files into a single CSS file. For example, using the command line:
   ```
   sass src/scss/main.scss src/css/main.css
   ```

4. **Open the project**:
   Open `src/index.html` in your web browser to see the animations and styles in action.

## Usage Examples

- **Animations**: Use the classes defined in `_animations.scss` to apply animations to elements.
- **Transitions**: Enhance user interactions with smooth transitions defined in `_transitions.scss`.
- **Transforms**: Apply various transforms from `_transforms.scss` to create dynamic effects.
- **Gradients**: Use the gradient styles from `_gradients.scss` for visually appealing backgrounds.
- **Pseudo-classes**: Utilize styles from `_pseudo-classes.scss` to improve user experience on hover, focus, and other states.

## Libraries Included

- **Animate.css**: A library that provides a collection of pre-defined CSS animations.
- **AOS.css**: A library that enables animations on scroll, enhancing the visual experience as users navigate the page.

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.