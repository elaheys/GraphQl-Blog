import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
query MyQuery {
  posts {
    title
    slug
    id
    coverPhoto {
      url
    }
    author {
      ... on Author {
        id
        name
        avatar {
          url
        }
      }
    }
  }
}
`;

const GET_AUTHORS_INFO = gql`
  query MyQuery {
  authors {
    name
    id
    slug
    avatar {
      url
    }
  }
}
`;

const GET_AUTHOR_INFO =gql`
  query getAuthorInfo($slug: String!) {
  author(where: {slug: $slug}) {
    avatar {
      url
    }
    field
    name
    description {
      html
    }
    posts {
      coverPhoto {
        url
      }
      id
      slug
      title
    }
  }
}
`;

const GET_POST_INFO = gql`
  query getPost ($slug: String!) {
  post(where: {slug: $slug}) {
    coverPhoto {
      url
    }
    author {
      ... on Author {
        avatar {
          url
        }
        field
        name
      }
    }
    content {
      html
    }
    title
  }
}
`;

const GET_POST_COMMENTS = gql`
  query getPostComments($slug: String!) {
  comments(where: {post: {slug: $slug}}) {
    id
    name
    text
  }
}
`

export {GET_BLOGS_INFO , GET_AUTHORS_INFO , GET_AUTHOR_INFO , GET_POST_INFO , GET_POST_COMMENTS};