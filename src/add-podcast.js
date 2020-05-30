const $ = require('jquery');

$(() => {
  function addPodcast (event) {
    event.preventDefault();

    const podcastSearchTerm = $('#podcastName').val().trim();

    $('#podcastName').val('');

    // DEBUG:
    // console.log(`podcastSearchTerm = ${podcastSearchTerm}`);

    $.ajax({
      url: 'https://itunes.apple.com/search',
      data: {
        term: podcastSearchTerm.toLowerCase(),
        entity: 'podcast',
        limit: '1'
      },
      type: 'GET',
      dataType: 'jsonp'
    }).then((response) => {
      const result = response.results;

      // DEBUG:
      // console.log(result[0].feedUrl);

      $.post('/api/podcast', { rssUrl: result[0].feedUrl }, async (response) => {
        // DEBUG:
        // console.log(`response = ${JSON.stringify(response)}`);

        location.reload();
      });
    });
  }

  // Listen for the Add (podcast) button to be clicked.
  $('#addPodcast').on('click', addPodcast);

  // Listen for the Add (podcast) text input to change.
  $('#podcastName').on('change', addPodcast);
});
