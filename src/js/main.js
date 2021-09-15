// =======================================
// sticky nav
// =======================================
const nav = document.querySelector('.nav');
const stickyNav = (entries) => {
	const [entry] = entries;
	if (!entry.isIntersecting) nav.classList.add('sticky');
	else nav.classList.remove('sticky');
};
const header = document.querySelector('h1.heading');
const navHeight = nav.getBoundingClientRect().height;
const headerObserver = new IntersectionObserver(stickyNav, {
	root: null,
	threshold: 0,
	rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// =======================================
// Mobile Menu
// =======================================
const navTrigger = document.querySelectorAll('.menu__trigger');
navTrigger.forEach((btn) => {
	btn.addEventListener('click', () => {
		nav.classList.toggle('active');
	});
});

// =======================================
// Course Content
// =======================================

const listArray =
	'Sed ut perspiciatis, unde omnis, iste natus error, sit voluptatem, accusantium doloremque, laudantium'.split(
		','
	);

const contentData = [
	{
		week: '1st Week',
		title: 'Course presentation',
		list: listArray,
	},
	{
		week: '2nd Week',
		title: 'Humanities',
		list: listArray,
	},
	{
		week: '3rd Week',
		title: 'Social science  I',
		list: listArray,
	},
	{
		week: '4th Week',
		title: 'Social science  II',
		list: listArray,
	},
	{
		week: '5th Week',
		title: 'Social science  III',
		list: listArray,
	},
	{
		week: '6th Week',
		title: 'Reading comprehensiom',
		list: listArray,
	},
	{
		week: '7th Week',
		title: 'Text type',
		list: listArray,
	},
	{
		week: '8th Week',
		title: 'Iconic verble texts',
		list: listArray,
	},
	{
		week: '9th Week',
		title: ' Argumentation text',
		list: listArray,
	},
	{
		week: '10th Week',
		title: ' Mathimatical reasoning',
		list: listArray,
	},
	{
		week: '11th Week',
		title: 'Math',
		list: listArray,
	},
	{
		week: '12th Week',
		title: 'Experimental sciences',
		list: listArray,
	},
	{
		week: '13th Week',
		title: 'Simulation exam: First phase',
		list: listArray,
	},
	{
		week: '14th Week',
		title: 'Simulation exam: Second stage',
		list: listArray,
	},
];

const contentWrapper = document.querySelector('.content');
const courseContentMarkup = contentData
	.map((chapter) => {
		const listMarkup = chapter.list
			.map((lecture) => {
				return `<li>
					<svg>
						<use xlink:href="./img/icons.svg#icon-unlocked"></use>
					</svg>
					${lecture}
				</li>`;
			})
			.join('');
		return `
		<div class="chapter">
			<h3 class="chapter__title">
				<span>${chapter.week}: </span>${chapter.title}
				<svg>
					<use xlink:href="./img/icons.svg#icon-chevron-right"></use>
				</svg>
			</h3>
			<ul class="chapter__list">
				${listMarkup}
			</ul>
		</div>
	`;
	})
	.join('');

contentWrapper.innerHTML = '';
contentWrapper.insertAdjacentHTML('afterbegin', courseContentMarkup);

// Content list Accordion
const chapters = document.querySelectorAll('.chapter');
const chapterTitles = document.querySelectorAll('.chapter__title');
chapters.forEach((chapter) => {
	chapter.addEventListener('click', function (e) {
		const title = e.target.closest('.chapter__title');
		if (!title) return;
		chapterTitles.forEach((t) => {
			const contentBody = t.nextElementSibling;
			if (t === title) {
				t.classList.toggle('active');
				if (contentBody.style.maxHeight) {
					contentBody.style.maxHeight = null;
				} else {
					contentBody.style.maxHeight = contentBody.scrollHeight + 10 + 'px';
				}
			} else {
				t.classList.remove('active');
				contentBody.style.maxHeight = null;
			}
		});
	});
});
