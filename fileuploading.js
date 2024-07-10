let x = ()=>{
            
            let a = document.forms["myform"]["user"].value; 
            let b = document.forms["myform"]["mail"].value; 
            let c = document.forms["myform"]["Comment"].value; 
            let d = document.forms["myform"]["ffile"].value; 
            let e= document.forms["myform"]["ffolder"].value;
            if(a === null || a === ""){
                alert("Please Enter the UserName");
                return false;
            }
            if(b === null || b === ""){
                alert("Enter Email Address");
                return false;
            }
            if(c === null || c === ""){
                alert("Please Add a Comment ");
                return false;
            }
            if(d === null || d === ""){
                alert("Select A File");
                return false;
            }
            if(e === null || e === ""){
                alert("Select A Folder");
                return false;
            }
            else{
                alert("File Had Uploaded To The Server")
            }
        }
        function uploadFiles() {
            const fileInput = document.getElementById('fileInput');
            const files = fileInput.files;
            if (files.length > 0) {
                const formData = new FormData();
                for (let i = 0; i < files.length; i++) {
                    formData.append('files[]', files[i]);
                }
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'upload.php'); 
                xhr.onload = function() {
                    if (xhr.status === files[i].size) {
                        alert('Files uploaded successfully!');
                    } else {
                        alert('Error uploading files!');
                    }
                };
                xhr.send(formData);
            } else {
                alert('Please select files to upload.');
            }
        }
        
        function uploadFolder() {
            const fileInput = document.getElementById('fileInput');
            const files = fileInput.files;

            // Check if files are selected
            if (files.length > 0) {
                // Create a FormData object to prepare files for upload
                const formData = new FormData();

                // Add each file to the FormData object
                for (let i = 0; i < files.length; i++) {
                    formData.append('files[]', files[i]);
                }

                // Make an AJAX request to upload the files
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'upload.php'); // Replace 'upload.php' with your server-side script
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        alert('Files uploaded successfully!');
                    } else {
                        alert('Error uploading files!');
                    }
                };
                xhr.send(formData);
            } else {
                alert('Please select files to upload.');
            }
        }