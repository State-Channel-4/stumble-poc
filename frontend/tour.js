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
    },
    useModalOverlay: true
  });

  // Add the steps to the tour
  tour.addStep({
    title: 'Welcome to Channel4',
    text: 'This is the navbar, which contains links to different parts of the site.',
    attachTo: {
      element: '.navbar',
      on: 'bottom'
    },
    buttons: [
        {
          text: 'Skip',
          action: tour.cancel,
          classes: 'shepherd-button-secondary'
        },
        {
            text: 'Next',
            action: tour.next
        }
    ]
  });

  tour.addStep({
    title: 'Channel4 Logo',
    text: 'This is the Channel4 logo, which will take you back to the homepage if you click it.',
    attachTo: {
      element: '.navbar-logo',
      on: 'bottom'
    },
    buttons: [
      {
        text: 'Skip',
        action: tour.cancel,
        classes: 'shepherd-button-secondary'
      },
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
        text: 'Skip',
        action: tour.cancel,
        classes: 'shepherd-button-secondary'
      },
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
    text: 'This is the submit button, which you can use to submit the URL you entered in the input field. <code><b>Wallet connection needed for this action</b></code>',
    attachTo: {
      element: '#submitUrlButton',
      on: 'bottom'
    },
    buttons: [
      {
        text: 'Skip',
        action: tour.cancel,
        classes: 'shepherd-button-secondary'
      },
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
    text: 'This is the upvote button, which you can use to show your approval of a page. <code><b>Wallet connection needed for this action</b></code>',
    attachTo: {
      element: '#upvoteButton',
      on: 'bottom'
    },
    buttons: [
      {
        text: 'Skip',
        action: tour.cancel,
        classes: 'shepherd-button-secondary'
      },
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
        text: 'Skip',
        action: tour.cancel,
        classes: 'shepherd-button-secondary'
      },
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
    text: 'This is the downvote button, which you can use to show your disapproval of a page.<code><b>Wallet connection needed for this action</b></code>',
    attachTo: {
      element: '#downvoteButton',
      on: 'bottom'
    },
    buttons: [
      {
        text: 'Skip',
        action: tour.cancel,
        classes: 'shepherd-button-secondary'
      },
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
        text: 'Skip',
        action: tour.cancel,
        classes: 'shepherd-button-secondary'
      },
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
        text: 'Skip',
        action: tour.cancel,
        classes: 'shepherd-button-secondary'
      },
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
    title: 'Connect Button',
    text: 'Connect button connects your metamask wallet with the site. In order to perform any on-chain action like upvote/downvote or submitting url, you must connect first.',
    attachTo: {
      element: '#connectButton',
      on: 'bottom'
    },
    buttons: [
      {
        text: 'Skip',
        action: tour.cancel,
        classes: 'shepherd-button-secondary'
      },
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

// Initiate the tour
if(!localStorage.getItem('shepherd-tour')) {
  // Start the tour
  tour.start();
  localStorage.setItem('shepherd-tour', 'yes');
}