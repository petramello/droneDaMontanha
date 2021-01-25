// import React from 'react'
//
// import Logo from '../../Logo'
// import Index from '../NavigationItems'
// import classes from './SideMenu.module.css'
// import Backdrop from '../../UI/Backdrop'
//
// const SideMenu = props => {
//   let attachedClasses = [classes.SideMenu, classes.Close]
//   if (props.open) {
//     attachedClasses = [classes.SideMenu, classes.Open]
//   }
//   return (
//     <>
//       <Backdrop show={props.open} clicked={props.closed} />
//       <div className={attachedClasses.join(' ')}>
//         <div className={classes.Logo}>
//           <Logo />
//         </div>
//         <nav>
//           <Index />
//         </nav>
//       </div>
//     </>
//   )
// }
//
// export default SideMenu
