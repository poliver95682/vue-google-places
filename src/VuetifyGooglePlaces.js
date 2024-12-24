import mixin from './mixin'
import { VTextField } from 'vuetify/lib'

export default {
  mixins: [mixin],
  props: {
    searchIcon: {
      type: String,
      default: () => ''
    },
    clearIcon: {
      type: String,
      default: () => ''
    }
  },
  computed: {
    getAppendIcon () {
      return this.place ? this.clearIcon : this.searchIcon
    }
  },
  methods: {
    renderInput () {
      return this.$createElement(VTextField, {
        attrs: this.$attrs,
        on: {
          'click:append': () => {
            this.$refs.gp.changePlace(null)
          }
        },
        props: {
          appendIcon: this.getAppendIcon,
          value: this.val
        }
      })
    }
  }
}
