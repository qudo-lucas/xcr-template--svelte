import { actions } from 'xstate';
const { raise } = actions;

import Auth from "views/auth/auth.svelte";
import Signin from "views/auth/steps/signin.svelte";
import GeneralInfo from "views/auth/steps/general-info.svelte";

import Home from"views/home/home.svelte";

export default {
    initial : "auth",

    on : {
        AUTH : "auth",
        HOME : "home"
    },
    
    states : {
        auth : {
				initial : "signin",
					
            meta : {
                component : Auth,
            },
					
            states : {
                
                    signin : {
                        meta : {
                            component : Signin
                        },

                        on : {
                            "NEXT" : "generalInfo"
                        }
                    },
                
                    generalInfo : {
                        meta : {
                            component : GeneralInfo
                        },

                        on : {
                            "BACK" : "signin",
                            "NEXT" : {
                                actions : raise("HOME"),
                            }
                        }
                    }
            }
        },
			
        home : {
            meta : {
                component : Home,
            },
        },
    },
};
