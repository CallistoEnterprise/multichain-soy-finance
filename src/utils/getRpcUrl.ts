import sample from 'lodash/sample'

// Array of available nodes to connect to
export const nodes = [process.env.REACT_APP_NODE_1]

const getNodeUrl = () => {
  return sample(nodes)
}

export const getRpcForMulti = (rpcs) => {
  return sample(rpcs)
}

export default getNodeUrl
