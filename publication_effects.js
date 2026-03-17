$(document).ready(function() {
    // Hover effect: swap publication images on hover
    $('div.publication').hover(
        function() {
            var pre = $(this).find('.project-thumbnail.pre-hover');
            var post = $(this).find('.project-thumbnail.post-hover');
            if (pre.length && post.length) {
                post.show();
                pre.fadeOut();
            }
        },
        function() {
            var pre = $(this).find('.project-thumbnail.pre-hover');
            var post = $(this).find('.project-thumbnail.post-hover');
            if (pre.length && post.length) {
                pre.fadeIn();
                post.hide();
            }
        }
    );

    // Copy bibtex to clipboard
    $('button.copy-btn').on('click', function() {
        var bibText = $(this).closest('.modal-content').find('.bib-text');
        if (bibText.length) {
            var text = bibText.text().trim();
            navigator.clipboard.writeText(text).then(function() {
                alert('Successfully copied to clipboard!');
            });
        }
    });
});
