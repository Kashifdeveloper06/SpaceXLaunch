import * as TYPES from '../../types';
import * as Util from '../../utils';
import * as TASKS from '../index';


const LAUNCHES_QUERY = `
  {
    launchesPast(limit:10){
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        flickr_images
      }
      rocket {
        rocket_name
      }
    }
  }
`
export const fetchLaunches = () => {
  
  return dispatch => {
    
    Util.postRequest(
      '',
      LAUNCHES_QUERY,
      result => {
        if (result.status === 200) {
          result.json().then(data => {
            dispatch({
              type: TYPES.FETCHED_LAUNCHES,
              payload: null
            })
            dispatch({
              type: TYPES.FETCHED_LAUNCHES,
              payload: data.data.launchesPast
            })
          })
        }
      },
      error => {
        console.log(error)
      }
    )

    
  }
};
