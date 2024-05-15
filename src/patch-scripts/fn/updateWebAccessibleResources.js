export const updateWebAccessibleResources = (manifest) => {
  console.log("updating web_accessible_resources to assets/*")

  const { web_accessible_resources } = manifest
  web_accessible_resources[0].resources = ["assets/*"]
}
