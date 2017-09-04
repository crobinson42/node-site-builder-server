// A hook that adds the accountId from the JWT to query params
module.exports = function () {
  return function (hook) {
    // get accountId from jwt
    const { accountId } = hook.params.user

    // add accountId to data
    Object.assign(hook.data, { accountId })
  }
}
