# Counter_App
## Date:10/7/2025
## Objective:
To build a live character counter using JavaScript that dynamically displays the number of characters entered into a textarea — similar to what you see in Twitter or feedback forms.

## Tasks:

#### 1. Create the HTML Structure:
Add a ```<textarea>``` for user input.

Place a ```<div> or <p>``` below it to show the live character count.

Include a label or heading like “Write your message”.

#### 2. Style with CSS:
Center the layout using margin or flexbox.

Style the textarea with border, padding, and font size.

Style the counter to be bold and place it neatly below the input area.

#### 3. Add JavaScript Functionality:
Use addEventListener("input", ...) on the textarea.

Inside the function, get the length of the value (.value.length).

Update the counter element with this number in real time.

#### 4. Enhancements:
Set a maximum character limit (e.g., 100) and show remaining characters.

Change the text color if the user exceeds the limit.

Add emojis or icons using Unicode for visual feedback.
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Live Character Counter</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h2>📝 Write your message</h2>
    <textarea id="message" placeholder="Type something..." maxlength="100"></textarea>
    <p id="charCount"><strong>0</strong> / 100 characters</p>
  </div>

  <script src="script.js"></script>
</body>
</html>

```
## CSS Code:
```
body{
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container{
    background-color: rgb(239, 210, 210);
    border-radius: 6px;
    text-align: center;
    padding: 30px 20px;
    max-width: 400px;
    width: 90%;
}

.container h2{
    font-size: 1.4rem;
    margin-bottom: 15px;
}
textarea{
    width: 100%;
    height: 100px;
    padding: 12px;
    font-size: 16px;
    border-radius:10px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    resize: none;
    background-color: rgb(223, 192, 138);
}
#charCount {
  margin-top: 10px;
  font-weight: bold;
  color: #333;
}
.exceeded {
  color: red;
}
```
## Javascript:
```
const textarea=document.getElementById("message");
const charCount =document.getElementById("charCount");
const maxlimit=100;

textarea.addEventListener("input",()=>{
    const cur_length=textarea.value.length;
    charCount.innerHTML=`<strong>${cur_length}</strong> /${maxlimit} characters`;
    if(cur_length>maxlimit){
        charCount.classList.add("exceeded");
    }
    else{
        charCount.classList.remove("exceeded");
    }
})
```
## Output:
<img width="1906" height="963" alt="Screenshot 2025-07-10 183228" src="https://github.com/user-attachments/assets/eb634e7d-f852-4515-9eaa-db906ae3fcfe" />

## Result:
A live character counter using JavaScript that dynamically displays the number of characters entered into a textarea — similar to what you see in Twitter or feedback forms is built successfully.
