const INITIAL_STATE =  {sections:[
    {
    title: 'hats',
    imageUrl: 'https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
    id: 1,
    linkUrl: 'shop/hats',
    },
    {
    title: 'jackets',
    imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
    id: 2,
    linkUrl: 'shop/jackets',
    },
    {
    title: 'sneakers',
    imageUrl: 'https://images.unsplash.com/photo-1618677831708-0e7fda3148b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    id: 3,
    linkUrl: 'shop/sneakers',
    },
    {
    title: 'womens',
    imageUrl: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    id: 4,
    linkUrl: 'shop/womens',
    size:'large'
    },
    {
    title: 'mens',
    imageUrl: 'https://images.unsplash.com/photo-1487744480471-9ca1bca6fb7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2091&q=80',
    id: 5,
    linkUrl: 'shop/mens',
    size:'large'
    }
    ] }

const DirectoryReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        default:return state
    }
}

export default DirectoryReducer