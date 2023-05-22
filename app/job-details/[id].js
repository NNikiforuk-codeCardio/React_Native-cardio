import React from "react";
import {
	Text,
	View,
	SafeAreaView,
	ScrollView,
	ActivityIndicator,
	RefreshControl,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
	Company,
	Job,
	JobFooter,
	ScreenHeaderBtn,
	Specifics,
	JobAbout
} from "../../components";
import { COLORS, SIZES, icons, images } from "../../constants";
import useFetch from "../../hook/useFetch";

const JobDetails = () => {
	const params = useSearchParams();
	const router = useRouter();
	const [refreshing, setRefreshing] = useState(false);
	const { data, isLoading, error, refetch } = useFetch(params.id, {});

	const onRefresh = () => { };

	const displayTabContent = () => {
		return <JobAbout
			info={data.originalPosting ?? "No data provided"}
		/>


	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerBackVisible: false,
					headerLeft: () => (
						<ScreenHeaderBtn
							iconUrl={icons.left}
							dimension="60%"
							handlePress={() => router.back()}
						/>
					),
					headerRight: () => (
						<ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
					),
					headerTitle: "",
				}}
			/>
			<>
				<ScrollView
					showsVerticalScrollIndicator={false}
					refreshControl={
						<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
					}
				>
					{isLoading ? (
						<ActivityIndicator size="large" color={COLORS.primary} />
					) : error ? (
						<Text>Something went wrong</Text>
					) : data === undefined ? (
						<Text>No data</Text>
					) : (
						<View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
							<Company
								companyLogo={images.randomImage}
								jobTitle={data.title}
								companyName={data.company}
								location={data.location}
							/>
							{displayTabContent()}
						</View>
					)}
				</ScrollView>
				<JobFooter url={data?.url ?? "https://careers.google.com/jobs/results/"} />
			</>
		</SafeAreaView>
	);
};

export default JobDetails;
