export function getM3Rec() {
  let Ember
  try {
    Ember = requireModule("ember")["default"]
  } catch {
    Ember = window.Ember
  }
  try {
    let app = Ember.Namespace.NAMESPACES.find(
      (namespace) => namespace instanceof Ember.Application
    )
    let store = app.__container__.lookup("service:store")
    return store._globalM3RecordDataCache
  } catch (e) {}
  return null
}
