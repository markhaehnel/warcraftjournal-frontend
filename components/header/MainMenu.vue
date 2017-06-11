<template>
    <nav class="dropdown clearfix">
        <button class="dropdown-button">
            <svg x="0px" y="0px" width="18px" height="12px" viewBox="0 0 18 12">
                <g>
                    <rect id="top-bar" fill="black" width="18" height="2"/>
                    <rect id="middle-bar" fill="black"  y="5" width="18" height="2"/>
                    <rect id="bottom-bar" fill="black"  y="10" width="18" height="2"/>
                </g>
            </svg>
            <span class="hidden-xs"> MENU</span>
        </button>
        <div class="dropdown-content">
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/about">About</nuxt-link>
        </div>
    </nav>
</template>

<script>
import Palette from '~components/decorations/Palette.vue'

export default {
    components: {
        Palette
    }
}
</script>

<style lang="scss" scoped>
    @import '~assets/css/variables.scss';

    $dropdownBackgroundColor: #ffffff;

    .dropdown {
        display: inline-block;
        float: right;
        height: 100%;
        position: relative;
        right: 0;
    }

    .dropdown-button {
        background-color: transparent;
        border: none;
        color: $fontColor;
        cursor: pointer;
        font-size: 1em;
        height: 100%;
        padding: 16px;
        transition: all 0.25s;

        svg {
            #top-bar, #bottom-bar {
                transition: transform 0.3s;
            }
            #middle-bar {
                transition: opacity 0.3s;
            }
        }    
    }

    .dropdown-button:focus {
        outline: none;
    }

    .dropdown-content {
        background-color: $dropdownBackgroundColor;
        box-shadow: $boxShadow;
        color: $fontColor;
        display: none;
        min-width: 160px;
        position: absolute;
        right: 0;
        z-index: 1;
    }

    .dropdown-content {
        a {
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            border: none;
        }

        a:hover {
            background-color: #fafafa;
            border: none;
        }

        a:active {
            background-color: #f0f0f0;
        }
    }

    .dropdown:hover {
        .dropdown-content {
            display: block;
        }

        .dropdown-button {
            background-color: black;
            color: white;
        }

        .dropdown-button svg {
            filter: invert(100%);

            #top-bar {
                transform: translate(3px, 3px);
            }
            
            #middle-bar {
                opacity: 0;
            }

            #bottom-bar {
                transform: translate(-3px, -3px);
            }
        }
    }
    
    .router-link-exact-active {
        color: #333;
        font-style: italic;
    }

</style>
