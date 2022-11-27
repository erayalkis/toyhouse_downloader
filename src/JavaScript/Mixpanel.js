import mixpanel from "mixpanel-browser";

mixpanel.init('c87ddd59f6686afdf4945c6da11103a0', { debug: true })

let actions = {
  track: (name, props) => {
    mixpanel.track(name, props)
  }
}

export let Mixpanel = actions;