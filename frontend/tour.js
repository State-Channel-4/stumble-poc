// Create a new instance of the Shepherd class with custom options
const tour = new Shepherd.Tour({
    defaultStepOptions: {
      arrow: true,
      scrollTo: true,
      buttons: [
        {
          text: 'Back',
          action: this.back,
          classes: 'shepherd-button-secondary'
        },
        {
          text: 'Next',
          action: this.next
        }
      ]
    }
  });

  // Add the steps to the tour
  tour.addStep({
    title: 'Welcome to StumbleUpon',
    text: 'This is the navbar, which contains links to different parts of the site.',
    attachTo: {
      element: '.navbar',
      on: 'bottom'
    },
    buttons: [
        {
            text: 'Next',
            action: tour.next
        }
    ]
  });

  tour.addStep({
    title: 'StumbleUpon Logo',
    text: 'This is the StumbleUpon logo, which will take you back to the homepage if you click it.',
    attachTo: {
      element: '.navbar-logo',
      on: 'bottom'
    },
    buttons: [
        {
            text: 'Back',
            action: tour.back,
            classes: 'shepherd-button-secondary'
        },
        {
            text: 'Next',
            action: tour.next
        }
    ]
  });

  tour.addStep({
    title: 'URL Input Field',
    text: 'This is the URL input field, use it to submit URLs to our site.',
    attachTo: {
      element: '.url-input',
      on: 'bottom'
    },
    buttons: [
        {
            text: 'Back',
            action: tour.back,
            classes: 'shepherd-button-secondary'
        },
        {
            text: 'Next',
            action: tour.next
        }
    ]
  });

  tour.addStep({
    title: 'Submit Button',
    text: 'This is the submit button, which you can use to submit the URL you entered in the input field.',
    attachTo: {
      element: '#submitUrlButton',
      on: 'bottom'
    },
    buttons: [
        {
            text: 'Back',
            action: tour.back,
            classes: 'shepherd-button-secondary'
        },
        {
            text: 'Next',
            action: tour.next
        }
    ]
  });

  tour.addStep({
    title: 'Upvote Button',
    text: 'This is the upvote button, which you can use to show your approval of a page.',
    attachTo: {
      element: '#upvoteButton',
      on: 'bottom'
    },
    buttons: [
        {
            text: 'Back',
            action: tour.back,
            classes: 'shepherd-button-secondary'
        },
        {
            text: 'Next',
            action: tour.next
        }
    ]
  });

  tour.addStep({
    title: 'Stumble Button',
    text: 'This is the stumble button, which will take you to a random page on the site.',
    attachTo: {
      element: '#stumbleButton',
      on: 'bottom'
    },
    buttons: [
        {
            text: 'Back',
            action: tour.back,
            classes: 'shepherd-button-secondary'
        },
        {
            text: 'Next',
            action: tour.next
        }
    ]
  });

  tour.addStep({
    title: 'Downvote Button',
    text: 'This is the downvote button, which you can use to show your disapproval of a page.',
    attachTo: {
      element: '#downvoteButton',
      on: 'bottom'
    },
    buttons: [
        {
            text: 'Back',
            action: tour.back,
            classes: 'shepherd-button-secondary'
        },
        {
            text: 'Next',
            action: tour.next
        }
    ]
  });

  tour.addStep({
    title: 'OpenChannel button',
    text: 'To perform actions like upvote and downvote. You must open channel first.',
    attachTo: {
      element: '#openChannel',
      on: 'bottom'
    },
    buttons: [
        {
            text: 'Back',
            action: tour.back,
            classes: 'shepherd-button-secondary'
        },
        {
            text: 'Next',
            action: tour.next
        }
    ]
  });

  tour.addStep({
    title: 'CloseChannel Button',
    text: 'Once you are done with your upvote/downvote actions. You must use CloseChannel to submit your votes to the chain.',
    attachTo: {
      element: '#closeChannel',
      on: 'bottom'
    },
    buttons: [
        {
            text: 'Back',
            action: tour.back,
            classes: 'shepherd-button-secondary'
        },
        {
            text: 'Next',
            action: tour.next
        }
    ]
  });

  // Start the tour
  tour.start();