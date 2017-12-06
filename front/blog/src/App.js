import React, { Component } from 'react';
import ArticleList from './ArticleList';

// import logo from './logo.svg';
// import './App.css';

const articles = [
  {
    title: 'Первый тестовый пост',
    preview: 'Это небольшое превью текста',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae'
  },
  {
    title: 'Второй тестовый пост',
    preview: 'Это небольшое превью текста',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae'
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <ArticleList items={articles}/>
      </div>
    );
  }
}

export default App;
