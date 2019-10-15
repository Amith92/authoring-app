const initialState = {
     collections: JSON.parse(localStorage.getItem('collections')) || []
}

const authoringReducer = (state = initialState, action) => {
     switch(action.type) {
          case 'ADD_COLLECTION': {
               const uuidv1 = require('uuid/v1');
               let index = uuidv1();
               let collections = JSON.parse(localStorage.getItem('collections')) || [];
               let collection = {
                    index, name: action.payload, containers: []
               }
               collections.push(collection)
               localStorage.setItem('collections', JSON.stringify(collections));
               return  {collections: [...collections]} 
          }
          case 'ADD_CONTAINER': {
               let collections = JSON.parse(localStorage.getItem('collections')) || [];
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
               // Object.assign(collections, filteredCollection);
               localStorage.setItem('collections', JSON.stringify(collections));
               return {collections: [...collections]} 
          }
          case 'REMOVE_CONTAINER': {
               let collections = JSON.parse(localStorage.getItem('collections')) || [];
               let fileteredCollection = collections.filter(collection => {
                    return collection.index === action.payload.collectionIndex
               });
               let filteredContainer = fileteredCollection[0].containers.filter(container => {
                    return container.index !== action.payload.containerIndex
               });
               fileteredCollection[0].containers = filteredContainer
               // console.log(fileteredCollection)
               // Object.assign(collections, fileteredCollection);
               // console.log(collections)
               localStorage.setItem('collections', JSON.stringify(collections));
               return { collections: [...collections] }
          }
          case 'ADD_ITEM': {
               let collections = JSON.parse(localStorage.getItem('collections')) || [];
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
               // Object.assign(collections, filteredCollection);
               localStorage.setItem('collections', JSON.stringify(collections));
               return {collections: [...collections]} 
          }
          default: {
               return state
          }
     }
}

export default authoringReducer;