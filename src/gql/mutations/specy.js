import gql from 'graphql-tag'

export const deleteSpecy = gql `
mutation ($id: ID!){
    deleteEspece(id: $id)
}
`