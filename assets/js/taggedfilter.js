var filteredset = new Set();

document.addEventListener('click', function (e) {
  var button = e.target;
  
  if (button.getAttribute('data-reset') === 'true') {
    // Reset the filters
    var filter = button.getAttribute('data-filter');
    resetFilter(filter);
  } else {
    // Filter the tag
    var filter = button.getAttribute('data-filter');
    var tag    = button.getAttribute('data-filter-tag');
    console.log(tag)
    if (filteredset.has(tag)) {
      filterTag(filter, tag, false);
      filteredset.delete(tag);
      console.log(filteredset)
    } else {
      filteredset.add(tag);
      filterTag(filter, tag, true);
      console.log(filteredset)
    }
  }
});

// Filter tag
function filterTag (filter, tag, hide=true) {
  var items = document.querySelectorAll('.' + filter + ' > li');

  for (var i = 0; i < items.length; i++) {
    var itemTags = items[i].getAttribute('data-tags');

    // Catch case with no tags
    if (itemTags != null) {
      if (itemTags.indexOf(tag) < 0) {
        if (hide) {
          items[i].setAttribute('data-toggle', 'off');
        } else {
          items[i].setAttribute('data-toggle', 'on');
          items[i].setAttribute('display', "list-item")
          items[i].parentElement.setAttribute('style', "list-style-type: circle;");
        }
      }
    }
  }
}

// Reset filters
function resetFilter (filter) {
  var items = document.querySelectorAll('.' + filter + ' > li');

  for (var i = 0; i < items.length; i++) {
    items[i].setAttribute('data-toggle', 'on');
  }
}