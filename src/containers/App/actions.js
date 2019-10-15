export const addCollection = formData => {
     return {
          type: 'ADD_COLLECTION',
          payload: formData
     }
}

export const addContainer = (formData) => {
     return {
          type: 'ADD_CONTAINER',
          payload: formData
     }
}

export const addItem = (formData) => {
     return {
          type: 'ADD_ITEM',
          payload: formData
     }
}

export const editItem = (formData) => {
     return {
          type: 'EDIT_ITEM',
          payload: formData
     }
}

export const removeContainer = (index) => {
     return {
          type: 'REMOVE_CONTAINER',
          payload: index
     }
}