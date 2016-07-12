// creating an object at the top level for our configuration object
export const FIELDS = {
  title: {
    type: 'input',
    label: 'Title for Post',
  },
  categories: {
    type: 'input',
    label: 'Enter some categories for this post',
  },
  content: {
    type: 'textarea',
    label: 'Post Contents',
  },
};

export const FIELDSVALIDATIONSTYLE = {
  success: {
    divclass: 'form-group has-success',
    label: {
      class: 'form-control-label',
      for: 'inputSuccess1',
    },
    input: {
      class: 'form-control form-control-success',
      id: 'inputSuccess1',
    },
  },
  warning: {
    divclass: 'form-group has-warning',
    label: {
      class: 'form-control-label',
      for: 'inputWarning1',
    },
    input: {
      class: 'form-control form-control-warning',
      id: 'inputWarning1',
    },
  },
  danger: {
    divclass: 'form-group has-danger',
    label: {
      class: 'form-control-label',
      for: 'inputDanger1',
    },
    input: {
      class: 'form-control form-control-danger',
      id: 'inputDanger1',
    },
  },
};
