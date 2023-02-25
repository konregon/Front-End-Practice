function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var location = document.querySelectorAll('input[name="location"]:checked');
  var funding = document.querySelector('input[name="funding"]:checked');
  var zipCode = document.getElementById("zip-code").value;
  var skills = Array.from(
    document.querySelectorAll("#tags-container .tag")
  ).map((tag) => tag.innerText.replace("X", "").trim());

  var nameValid = name.length >= 2;
  var emailValid = /\S+@\S+\.\S+/.test(email);
  var passwordValid = password.length >= 8;
  var locationValid = location.length > 0;
  var fundingValid = funding !== null;
  var zipCodeValid = /^[0-9]{6}$/.test(zipCode);
  var skillsValid = true;

  if (skills.length === 0) {
    skillsValid = false;
  }

  if (!nameValid) {
    alert("Please enter a valid name (at least 2 characters).");
    return;
  }
  if (!emailValid) {
    alert("Please enter a valid email address.");
    return;
  }
  if (!passwordValid) {
    alert("Please enter a valid password (at least 8 characters).");
    return;
  }
  //   if (!locationValid) {
  //     alert("Please select at least one location.");
  //     return;
  //   }
  if (!fundingValid) {
    alert("Please select a funding source.");
    return;
  }
  if (!skillsValid) {
    alert("Please select or enter at least one skill.");
    return;
  }
  if (!zipCodeValid) {
    alert("Please enter a valid 6-digit zip code.");
    return;
  }

  alert("Form submitted!");
  document.getElementById("myForm").submit();
}

function handleTagInput(event) {
  if (event.keyCode === 13) {
    event.preventDefault();

    var input = document.getElementById("tag-input");
    var value = input.value.trim();
    if (value.length > 0) {
      var container = document.getElementById("tags-container");
      var tag = document.createElement("div");
      tag.classList.add("tag");
      tag.innerText = value;
      container.insertBefore(tag, input);
      input.value = "";
    }
  } else if (event.keyCode === 8 && event.target.value.length === 0) {
    var container = document.getElementById("tags-container");
    var tags = container.querySelectorAll(".tag");
    if (tags.length > 0) {
      var lastTag = tags[tags.length - 1];
      container.removeChild(lastTag);
    }
  }
}

function removeTag(event) {
  var tag = event.target.parentNode;
  tag.parentNode.removeChild(tag);
}
