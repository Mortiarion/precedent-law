<script lang="ts">
	import { fadeOnVisible } from "$lib";
	import TeamDianaOne from "./components/TeamDianaOne.svelte";
	import TeamDmitroThree from "./components/TeamDmitroThree.svelte";
	import TeamLiliaFive from "./components/TeamLiliaFive.svelte";
	import TeamMladenSix from "./components/TeamMladenSix.svelte";
	import TeamVictorTwo from "./components/TeamVictorTwo.svelte";
	
	type TTeamInfo = {
		TeamDianaOne: boolean;
		TeamVictorTwo: boolean;
		TeamDmitroThree: boolean;
		TeamLiliaFive: boolean;
		TeamMladenSix: boolean;
	};

	let isShowInfo: TTeamInfo = {
		TeamDianaOne: false,
		TeamVictorTwo: false,
		TeamDmitroThree: false,
		TeamLiliaFive: false,
		TeamMladenSix: false
	};

	function toggleInfo(team: keyof TTeamInfo) {
		isShowInfo[team] = !isShowInfo[team];
	}
</script>

<section id="our-teame" class="py-24">
	<div class="container xl:px-16">
		<h3 class="main-title" use:fadeOnVisible>Наша команда</h3>

		<hr class="color-cccccc my-10" />

		<TeamDianaOne toggleInfo={() => toggleInfo('TeamDianaOne')} isShowInfo={isShowInfo.TeamDianaOne} />

		<hr class="color-cccccc mb-10" />

		<TeamVictorTwo toggleInfo={() => toggleInfo('TeamVictorTwo')} isShowInfo={isShowInfo.TeamVictorTwo} />

		<hr class="color-cccccc mb-10" />

		<TeamDmitroThree toggleInfo={() => toggleInfo('TeamDmitroThree')} isShowInfo={isShowInfo.TeamDmitroThree} />

		<hr class="color-cccccc mb-10" />

		<TeamLiliaFive toggleInfo={() => toggleInfo('TeamLiliaFive')} isShowInfo={isShowInfo.TeamLiliaFive} />

		<hr class="color-cccccc mb-10" />

		<TeamMladenSix toggleInfo={() => toggleInfo('TeamMladenSix')} isShowInfo={isShowInfo.TeamMladenSix} />

		<hr class="color-cccccc mb-10" />
	</div>
</section>
