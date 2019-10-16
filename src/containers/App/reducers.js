const getDataFromLocalStorage = () => {
     try {
          let collections = JSON.parse(localStorage.getItem('collections')) || []
          return collections
     }
     catch(err) {
          localStorage.removeItem('collections')
          return []
     }
}

const initialState = {
     collections: getDataFromLocalStorage()
}

const authoringReducer = (state = initialState, action) => {
     switch(action.type) {
          case 'ADD_COLLECTION': {
               const uuidv1 = require('uuid/v1');
               let index = uuidv1();
               let collections = getDataFromLocalStorage()
               let collection = {
                    index, name: action.payload, containers: []
               }
               collections.push(collection)
               localStorage.setItem('collections', JSON.stringify(collections));
               return  {collections: [...collections]} 
          }
          case 'ADD_CONTAINER': {
               let collections = getDataFromLocalStorage()
               // collections
               let filteredCollection = collections.filter(collection => {
                    return collection.index === action.payload.index
               });
               const uuidv1 = require('uuid/v1');
               let index = uuidv1();
               let container = {
                    index, name: action.payload.containerName, items: []
               }
               filteredCollection[0].containers.push(container);
               console.log(filteredCollection)
               localStorage.setItem('collections', JSON.stringify(collections));
               return {collections: [...collections]} 
          }
          case 'REMOVE_CONTAINER': {
               let collections = getDataFromLocalStorage()
               let fileteredCollection = collections.filter(collection => {
                    return collection.index === action.payload.collectionIndex
               });
               let filteredContainer = fileteredCollection[0].containers.filter(container => {
                    return container.index !== action.payload.containerIndex
               });
               fileteredCollection[0].containers = filteredContainer
               localStorage.setItem('collections', JSON.stringify(collections));
               return { collections: [...collections] }
          }
          case 'ADD_ITEM': {
               let collections = getDataFromLocalStorage()
               let filteredCollection = collections.filter(collection => {
                    return collection.index === action.payload.collectionIndex
               }); 
               let filteredContainer = filteredCollection[0].containers.filter(container => {
                    return container.index === action.payload.index
               });
               const uuidv1 = require('uuid/v1');
               let index = uuidv1();
               let item = {
                    index, name: action.payload.itemName, content: action.payload.content
               }
               filteredContainer[0].items.push(item);
               localStorage.setItem('collections', JSON.stringify(collections));
               return {collections: [...collections]} 
          }
          case 'EDIT_ITEM': {
               let collections = getDataFromLocalStorage()
               let fileteredCollection = collections.filter(collection => {
                    return collection.index === action.payload.index[0]
               });
               let filteredContainer = fileteredCollection[0].containers.filter(container => {
                    return container.index === action.payload.index[1]
               });
               let filteredItem = filteredContainer[0].items.filter(item => {
                    return item.index === action.payload.index[2]
               });
               filteredItem[0].content = action.payload.content;
               localStorage.setItem('collections', JSON.stringify(collections))
               return {collections: [...collections]}
          }
          default: {
               return state
          }
     }
}

export default authoringReducer;