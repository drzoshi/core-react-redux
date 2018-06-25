var routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'home',
  },
  {
    path: '/dashboard/',
    url: './pages/dashboard.html',
    name: 'dashboard',
	on:{
		pageInit:function(){
			//alert("dashboard init");
		}
	}
  },
  {
    path: '/themes/',
    componentUrl: './pages/themes.html'
  },
  {
    path: '/theme/:theme',
    url: './index.html',
	name: 'theme'
  },
  
  
  //framework7 demo routes
  {
	  path:'/f7-demo/',
	  url:'./pages/f7/demo-index.html',
	  name: 'f7'
  },
  // About page
  {
    path: '/about/',
    url: './pages/f7/about.html',
    name: 'about',
  },
  // Right Panel pages
  {
    path: '/panel-right-1/',
    content: '\
      <div class="page">\
        <div class="navbar">\
          <div class="navbar-inner sliding">\
            <div class="left">\
              <a href="#" class="link back">\
                <i class="icon icon-back"></i>\
                <span class="ios-only">Back</span>\
              </a>\
            </div>\
            <div class="title">Panel Page 1</div>\
          </div>\
        </div>\
        <div class="page-content">\
          <div class="block">\
            <p>This is a right panel page 1</p>\
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>\
          </div>\
        </div>\
      </div>\
    ',
  },
  {
    path: '/panel-right-2/',
    content: '\
      <div class="page">\
        <div class="navbar">\
          <div class="navbar-inner sliding">\
            <div class="left">\
              <a href="#" class="link back">\
                <i class="icon icon-back"></i>\
                <span class="ios-only">Back</span>\
              </a>\
            </div>\
            <div class="title">Panel Page 2</div>\
          </div>\
        </div>\
        <div class="page-content">\
          <div class="block">\
            <p>This is a right panel page 2</p>\
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>\
          </div>\
        </div>\
      </div>\
    ',
  },

  // Components
  {
    path: '/accordion/',
    url: './pages/f7/accordion.html',
  },
  {
    path: '/action-sheet/',
    componentUrl: './pages/f7/action-sheet.html',
  },
  {
    path: '/autocomplete/',
    componentUrl: './pages/f7/autocomplete.html',
  },
  {
    path: '/badge/',
    componentUrl: './pages/f7/badge.html',
  },
  {
    path: '/buttons/',
    url: './pages/f7/buttons.html',
  },
  {
    path: '/calendar/',
    componentUrl: './pages/f7/calendar.html',
  },
  {
    path: '/calendar-page/',
    componentUrl: './pages/f7/calendar-page.html',
  },
  {
    path: '/cards/',
    url: './pages/f7/cards.html',
  },
  {
    path: '/checkbox/',
    url: './pages/f7/checkbox.html',
  },
  {
    path: '/chips/',
    componentUrl: './pages/f7/chips.html',
  },
  {
    path: '/contacts-list/',
    url: './pages/f7/contacts-list.html',
  },
  {
    path: '/content-block/',
    url: './pages/f7/content-block.html',
  },
  {
    path: '/data-table/',
    componentUrl: './pages/f7/data-table.html',
  },
  {
    path: '/dialog/',
    componentUrl: './pages/f7/dialog.html',
  },
  {
    path: '/fab/',
    url: './pages/f7/fab.html',
  },
  {
    path: '/fab-morph/',
    url: './pages/f7/fab-morph.html',
  },
  {
    path: '/form-storage/',
    url: './pages/f7/form-storage.html',
  },
  {
    path: '/grid/',
    url: './pages/f7/grid.html',
  },
  {
    path: '/icons/',
    componentUrl: './pages/f7/icons.html',
  },
  {
    path: '/infinite-scroll/',
    componentUrl: './pages/f7/infinite-scroll.html',
  },
  {
    path: '/inputs/',
    url: './pages/f7/inputs.html',
  },
  {
    path: '/lazy-load/',
    url: './pages/f7/lazy-load.html',
  },
  {
    path: '/list/',
    url: './pages/f7/list.html',
  },
  {
    path: '/list-index/',
    componentUrl: './pages/f7/list-index.html',
  },
  {
    path: '/login-screen/',
    componentUrl: './pages/f7/login-screen.html',
  },
  {
    path: '/login-screen-page/',
    componentUrl: './pages/f7/login-screen-page.html',
  },
  {
    path: '/messages/',
    componentUrl: './pages/f7/messages.html',
  },
  {
    path: '/navbar/',
    url: './pages/f7/navbar.html',
  },
  {
    path: '/navbar-hide-scroll/',
    url: './pages/f7/navbar-hide-scroll.html',
  },
  {
    path: '/notifications/',
    componentUrl: './pages/f7/notifications.html',
  },
  {
    path: '/panel/',
    url: './pages/f7/panel.html',
  },
  {
    path: '/photo-browser/',
    componentUrl: './pages/f7/photo-browser.html',
  },
  {
    path: '/picker/',
    componentUrl: './pages/f7/picker.html',
  },
  {
    path: '/popup/',
    componentUrl: './pages/f7/popup.html',
  },
  {
    path: '/popover/',
    url: './pages/f7/popover.html',
  },
  {
    path: '/preloader/',
    componentUrl: './pages/f7/preloader.html',
  },
  {
    path: '/progressbar/',
    componentUrl: './pages/f7/progressbar.html',
  },
  {
    path: '/pull-to-refresh/',
    componentUrl: './pages/f7/pull-to-refresh.html',
  },
  {
    path: '/radio/',
    url: './pages/f7/radio.html',
  },
  {
    path: '/range/',
    componentUrl: './pages/f7/range.html',
  },
  {
    path: '/searchbar/',
    url: './pages/f7/searchbar.html',
  },
  {
    path: '/searchbar-expandable/',
    url: './pages/f7/searchbar-expandable.html',
  },
  {
    path: '/sheet-modal/',
    componentUrl: './pages/f7/sheet-modal.html',
  },
  {
    path: '/smart-select/',
    url: './pages/f7/smart-select.html',
  },
  {
    path: '/sortable/',
    url: './pages/f7/sortable.html',
  },
  {
    path: '/statusbar/',
    componentUrl: './pages/f7/statusbar.html',
  },
  {
    path: '/stepper/',
    componentUrl: './pages/f7/stepper.html',
  },
  {
    path: '/subnavbar/',
    url: './pages/f7/subnavbar.html',
  },
  {
    path: '/subnavbar-title/',
    url: './pages/f7/subnavbar-title.html',
  },
  {
    path: '/swiper/',
    url: './pages/f7/swiper.html',
    routes: [
      {
        path: 'swiper-horizontal/',
        url: './pages/f7/swiper-horizontal.html',
      },
      {
        path: 'swiper-vertical/',
        url: './pages/f7/swiper-vertical.html',
      },
      {
        path: 'swiper-space-between/',
        url: './pages/f7/swiper-space-between.html',
      },
      {
        path: 'swiper-multiple/',
        url: './pages/f7/swiper-multiple.html',
      },
      {
        path: 'swiper-nested/',
        url: './pages/f7/swiper-nested.html',
      },
      {
        path: 'swiper-loop/',
        url: './pages/f7/swiper-loop.html',
      },
      {
        path: 'swiper-3d-cube/',
        url: './pages/f7/swiper-3d-cube.html',
      },
      {
        path: 'swiper-3d-coverflow/',
        url: './pages/f7/swiper-3d-coverflow.html',
      },
      {
        path: 'swiper-3d-flip/',
        url: './pages/f7/swiper-3d-flip.html',
      },
      {
        path: 'swiper-fade/',
        url: './pages/f7/swiper-fade.html',
      },
      {
        path: 'swiper-scrollbar/',
        url: './pages/f7/swiper-scrollbar.html',
      },
      {
        path: 'swiper-gallery/',
        componentUrl: './pages/f7/swiper-gallery.html',
      },
      {
        path: 'swiper-custom-controls/',
        url: './pages/f7/swiper-custom-controls.html',
      },
      {
        path: 'swiper-parallax/',
        url: './pages/f7/swiper-parallax.html',
      },
      {
        path: 'swiper-lazy/',
        url: './pages/f7/swiper-lazy.html',
      },
      {
        path: 'swiper-pagination-progress/',
        url: './pages/f7/swiper-pagination-progress.html',
      },
      {
        path: 'swiper-pagination-fraction/',
        url: './pages/f7/swiper-pagination-fraction.html',
      },
      {
        path: 'swiper-zoom/',
        url: './pages/f7/swiper-zoom.html',
      },
    ],
  },
  {
    path: '/swipeout/',
    componentUrl: './pages/f7/swipeout.html',
  },
  {
    path: '/tabs/',
    url: './pages/f7/tabs.html',
  },
  {
    path: '/tabs-static/',
    url: './pages/f7/tabs-static.html',
  },
  {
    path: '/tabs-animated/',
    url: './pages/f7/tabs-animated.html',
  },
  {
    path: '/tabs-swipeable/',
    url: './pages/f7/tabs-swipeable.html',
  },
  {
    path: '/tabs-routable/',
    url: './pages/f7/tabs-routable.html',
    tabs: [
      {
        path: '/',
        id: 'tab1',
        content: ' \
        <div class="block"> \
          <p>Tab 1 content</p> \
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p> \
          <p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p> \
          <p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p> \
        </div> \
        ',
      },
      {
        path: '/tab2/',
        id: 'tab2',
        content: '\
        <div class="block"> \
          <p>Tab 2 content</p> \
          <p>Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia explicabo, unde aliquid impedit! Adipisci!</p> \
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p> \
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p> \
        </div> \
        ',
      },
      {
        path: '/tab3/',
        id: 'tab3',
        content: '\
        <div class="block"> \
          <p>Tab 3 content</p> \
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p> \
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p> \
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p> \
        </div> \
        ',
      },
    ],
  },
  {
    path: '/toast/',
    componentUrl: './pages/f7/toast.html',
  },
  {
    path: '/toggle/',
    url: './pages/f7/toggle.html',
  },
  {
    path: '/toolbar-tabbar/',
    componentUrl: './pages/f7/toolbar-tabbar.html',
    routes: [
      {
        path: 'tabbar/',
        componentUrl: './pages/f7/tabbar.html',
      },
      {
        path: 'tabbar-labels/',
        componentUrl: './pages/f7/tabbar-labels.html',
      },
      {
        path: 'tabbar-scrollable/',
        componentUrl: './pages/f7/tabbar-scrollable.html',
      },
      {
        path: 'toolbar-hide-scroll/',
        url: './pages/f7/toolbar-hide-scroll.html',
      },
    ],
  },
  {
    path: '/timeline/',
    url: './pages/f7/timeline.html',
  },
  {
    path: '/timeline-vertical/',
    url: './pages/f7/timeline-vertical.html',
  },
  {
    path: '/timeline-horizontal/',
    url: './pages/f7/timeline-horizontal.html',
  },
  {
    path: '/timeline-horizontal-calendar/',
    url: './pages/f7/timeline-horizontal-calendar.html',
  },
  {
    path: '/virtual-list/',
    componentUrl: './pages/f7/virtual-list.html',
  },
  {
    path: '/vi/',
    componentUrl: './pages/f7/vi.html',
  },

  // Color Themes
  {
    path: '/color-themes/',
    componentUrl: './pages/f7/color-themes.html',
  },

  // Page Loaders
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages/f7/page-loader-template7.html',
    // additional context
    options: {
      context: {
        foo: 'bar',
      },
    },
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/f7/page-loader-component.html',
    // additional context
    options: {
      context: {
        foo: 'bar',
      },
    },
  },

  // Default route (404 page). MUST BE THE LAST
  /*{
    path: '(.*)',
    url: './pages/f7/404.html',
  },*/
];
