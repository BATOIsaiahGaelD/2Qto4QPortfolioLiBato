# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.
</br>
Answer: The sidebar moved a certain amount to the right, specifically 20 pixels because of the given value for th left property. If it were the right property, it will move 20 pixels to the left instead. If you were to change the top property to bottom (as the original property would move the sidebar 20 pixels downward) it would move the sidebar 20 pixels upward. The top left right and bottom properties essentially mean how much you want to add to the top left right and bottom of the property's position respectively. So if I were to input 20 pixels in the left property, it would add 20 pixels to the left of the element, essentially moving it 20 pixels to the right.

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?
</br>
Answer: If I were to scroll the page, the footer would stay stuck to the top of the screen. It behaves differently because the fixed property attaches the element to the actual screen instead of the page, so when you scroll it does not move because the screen itself is what its attached or "fixed" to. This is different from relative, as it just changes the position relative to the actual placement of the element in the page before it was moved.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed? </br>
Answer: The effect of position: absolute on an element essentially makes it ignore its original placement in the page or container. It instead acts as if it was not part of the page, but is still present visually. With this, you have complete freedom in changing the size and position without affecting the other parts of the page (as it acts as if its on a completely different plane). This is different from fixed as fixed focuses on the computer screen, while absolute places the element in a separate plane that does not follow both the screen and the page as a reference. 

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?</br> </br>
Answer: The notice appears on top of the other elements because it has a higher z-index. The z-index acts as the z-position or the order that elements appear on top of each other. If you were to swap the z-index values, it would change its position in the z-axis (or its placement in the order of stacking on top of the other elements) placing it either in front of or behind elements with their respective z-index values. If the value were swapped to a lower one or to one less than 0, it would be placed behind elements higher than its z-index. If it's z-index value were to be swapped with a high one, it would be placed on top of the elements whose z-index value is lower than the element.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
    </br></br>
    Answer: You would have to change the top property to instead have a value of 66px, and the left value to have a value of 430px.
    </br></br>
    * Try to change the position of .content to relative then to fixed. What do you observed each time?</br></br>
    Answer: When the positio property of .content is changed to relative, it is moved relative to its static position. If its changed to fixed, it is moved just like the position: absolute, but it know follows the screen when scrolled.
    * What do you observe on about the effect of z-index on .notice and .content boxes?</br></br>
    Answer: I observed that if the z-index of .notice was higher than .content, it would place it on top of .content. If .content's z-index value was higher, .notice would be placed behind it.

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? </br>
    Answer: First, position: static places the element in its original position in the page as if no changes were made on it. It is placed where it is originally supposed to be. On the other hand, position: relative places the element relative to its position if it had position: static. Using the left, right, top, and bottom properties, will add the amount given in each property to the left, right, top, and bottom of the element respectively. For position:absolute, its effect on the other elements' positions in its container is removed, and its position is now based on the container. Lastly, position: fixed treats the screen as the basis for its position, and when scrolled, it follows the screen.

    b. How does absolute positioning depend on its parent element? </br>
    Answer: Absolute positioning depends on the parent element as it makes the parent element its basis of positioning. If the parent element were already moved a certain amount, it would base off the positioning based on the position of the parent element. So if the parent element is moved a certain amount, the absolute positioning of the element inside that element is now based on the position of the parent element. For example, the position: absolute of an element with top: 0 and left: 0 would place the element at the corner of the parent element.

    c. How do you differentiate sticky from fixed (you can research on sticky)?</br>
    Sticky is different from fixed as sticky (from https://www.w3schools.com/css/css_positioning_sticky.asp).

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.</br>
    If I were designing a webpage for a school event, the most important and most useful info would have the position:fixed so that you can constantly see it/ For example, there is an urgent announcement, we can put the announcement on the top of the screen constantly using position:fixed. You can also use the position:fixed as a way to constantly have a menu or navigation bar on your screen, allowing for quick navigation. I would use position: absolute to easily place info anywhere in the page, and place it in hard to reach spots that might damage the layout if I were to use position:relative. Position:relative would then be used for the main information on the website, seen at the main parts of the page.
