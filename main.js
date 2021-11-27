window.onscroll = function () {
	const header = document.querySelector('.header-inner')
	const sticky = header.offsetTop

	if (window.pageYOffset > sticky) {
		header.classList.add('active')
	} else {
		header.classList.remove('active')
	}
}
const dataInfo = [
	{
		img: './assect/images/Icon-Sythetic.png',
		title: 'SYNTHETIC CURVE',
		description:
			'Normal oracles update only the price data on-chain. The synthetic curve feature constantly synchronizes BOTH the price AND DEX liquidity on chain',
	},
	{
		img: './assect/images/Icon-Slippage.png',
		title: 'ANTI SLIPPAGE',
		description:
			'Expected price on a trade and actual price executed become closer. Which means you enter and exit small cap tokens with ease at a lower price.',
	},
	{
		img: './assect/images/Icon-Sythetic.png',
		title: 'SYNTHETIC CURVE',
		description:
			'Normal oracles update only the price data on-chain. The synthetic curve feature constantly synchronizes BOTH the price AND DEX liquidity on chain',
	},
	{
		img: './assect/images/Icon-Sythetic.png',
		title: 'SYNTHETIC CURVE',
		description:
			'Normal oracles update only the price data on-chain. The synthetic curve feature constantly synchronizes BOTH the price AND DEX liquidity on chain',
	},
	{
		img: './assect/images/Icon-Sythetic.png',
		title: 'SYNTHETIC CURVE',
		description:
			'Normal oracles update only the price data on-chain. The synthetic curve feature constantly synchronizes BOTH the price AND DEX liquidity on chain',
	},
	{
		img: './assect/images/Icon-Sythetic.png',
		title: 'SYNTHETIC CURVE',
		description:
			'Normal oracles update only the price data on-chain. The synthetic curve feature constantly synchronizes BOTH the price AND DEX liquidity on chain',
	},
	{
		img: './assect/images/Icon-Sythetic.png',
		title: 'SYNTHETIC CURVE',
		description:
			'Normal oracles update only the price data on-chain. The synthetic curve feature constantly synchronizes BOTH the price AND DEX liquidity on chain',
	},
]

// Slick
$('.slider-container').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	appendDots: $('.slider-dots'),
})

// AOS
AOS.init()

// sidebar toggle

const sidebarToggle = $('#sidebar-toggle')
const sidebar = $('.side-bar')
sidebarToggle.on('click', () => {
	sidebarToggle.toggleClass('active')
	sidebar.toggleClass('active')
	$('body').toggleClass('overflow-hidden')
})
