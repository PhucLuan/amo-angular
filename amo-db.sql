USE [test]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 4/28/2022 11:47:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Asset]    Script Date: 4/28/2022 11:47:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Asset](
	[Id] [uniqueidentifier] NOT NULL,
	[Code] [nvarchar](max) NULL,
	[Name] [nvarchar](max) NULL,
	[State] [int] NOT NULL,
	[Location] [nvarchar](max) NULL,
	[Specification] [nvarchar](max) NULL,
	[CategoryId] [uniqueidentifier] NOT NULL,
	[InstalledDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatorId] [uniqueidentifier] NULL,
	[Pubished] [bit] NOT NULL,
 CONSTRAINT [PK_Asset] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Assignment]    Script Date: 4/28/2022 11:47:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Assignment](
	[Id] [uniqueidentifier] NOT NULL,
	[AssignedDate] [datetime2](7) NOT NULL,
	[State] [int] NOT NULL,
	[Note] [nvarchar](max) NULL,
	[AssetID] [uniqueidentifier] NOT NULL,
	[UserID] [uniqueidentifier] NOT NULL,
	[RequestAssignmentId] [uniqueidentifier] NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatorId] [uniqueidentifier] NULL,
	[Pubished] [bit] NOT NULL,
 CONSTRAINT [PK_Assignment] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Category]    Script Date: 4/28/2022 11:47:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Category](
	[Id] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Prefix] [nvarchar](max) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatorId] [uniqueidentifier] NULL,
	[Pubished] [bit] NOT NULL,
 CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RequestAssignment]    Script Date: 4/28/2022 11:47:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RequestAssignment](
	[Id] [uniqueidentifier] NOT NULL,
	[ReturnDate] [datetime2](7) NULL,
	[State] [int] NOT NULL,
	[UserRequestId] [uniqueidentifier] NOT NULL,
	[UserAcceptId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_RequestAssignment] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20211126004852_initialdb', N'5.0.7')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20211126014230_seeddata', N'5.0.7')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20211202011021_update_tbl_assignment_requestassignment', N'5.0.7')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20211202011744_update_tbl_assignment_requestassignment', N'5.0.7')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20211202095151_update_allownul_returndate', N'5.0.7')
GO
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'3b2ecdc6-d1c8-4364-c70d-08d9b0970e64', N'MO000001', N'Test production 3', 6, N'HN', N'Ahihi', N'268835b8-5be5-43c8-9de9-725ea80ce90f', CAST(N'2021-11-29T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-26T04:42:16.2334477' AS DateTime2), CAST(N'2021-11-26T04:42:16.2334506' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'04cad31b-6428-4669-21c8-08d9b24f2d65', N'LA000003', N'Laptop3', 4, N'HN', N'A third laptop', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2021-03-12T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-28T09:26:07.4970728' AS DateTime2), CAST(N'2021-11-28T09:26:07.4970758' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'7a4565ea-1d26-4332-6381-08d9b257ec0e', N'PC000001', N'Test location HCM', 0, N'HCM', N'Smoke test', N'0981f275-1724-4d02-aa70-28ad6db846fc', CAST(N'2021-11-28T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-28T10:14:54.1243936' AS DateTime2), CAST(N'2021-11-28T10:14:54.1243970' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'41659893-4327-492a-6382-08d9b257ec0e', N'LA000004', N'HCMLaptop3', 0, N'HCM', N'A laptop that should be in HCMC', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2021-11-30T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-28T10:34:49.6559097' AS DateTime2), CAST(N'2021-11-28T10:34:49.6559127' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'56295e1c-8cb4-4f15-6383-08d9b257ec0e', N'LA000005', N'From AdminHN', 5, N'HN', N'Created by AdminHN', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2021-03-12T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-28T10:51:59.4289226' AS DateTime2), CAST(N'2021-11-28T10:51:59.4289255' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'67d2765c-b568-4dda-db87-08d9b2dfc5a8', N'LA000006', N'Laptop4', 0, N'HN', N'another laptop', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2021-11-29T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-29T02:27:21.2697353' AS DateTime2), CAST(N'2021-11-29T02:27:21.2697385' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'b8d09655-1232-43cf-db88-08d9b2dfc5a8', N'LA000006', N'Laptop5', 0, N'HN', N'another laptop', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2021-11-29T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-29T02:27:21.2844602' AS DateTime2), CAST(N'2021-11-29T02:27:21.2844619' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'56f1a080-a625-4903-db89-08d9b2dfc5a8', N'LA000007', N'laptop', 0, N'HN', N'aa', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2018-12-29T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-29T03:34:59.4676878' AS DateTime2), CAST(N'2021-11-29T03:34:59.4676994' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'283d592c-caa2-47ad-db8a-08d9b2dfc5a8', N'LA000008', N'laptop', 0, N'HN', N'aaa', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2019-06-29T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-29T03:35:40.8642749' AS DateTime2), CAST(N'2021-11-29T03:35:40.8642772' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'cbd2d4e2-be69-461c-db8b-08d9b2dfc5a8', N'LA000009', N'kkkkk', 0, N'HN', N'ssss', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2010-06-29T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-29T03:36:19.6348464' AS DateTime2), CAST(N'2021-11-29T03:36:19.6348486' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'2915885f-dc8e-4d95-db8c-08d9b2dfc5a8', N'LA000010', N'Laptop', 0, N'HN', N'xgfrf', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2018-06-29T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-29T03:44:34.2461353' AS DateTime2), CAST(N'2021-11-29T03:44:34.2461394' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'83461db9-18a5-4ebc-db8d-08d9b2dfc5a8', N'LA000011', N'Laptop', 0, N'HN', N'kmrrm', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2018-06-29T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-29T03:45:25.6684103' AS DateTime2), CAST(N'2021-11-29T03:45:25.6684137' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'dfed6b9c-db7a-4287-db8e-08d9b2dfc5a8', N'LA000012', N'Laptop', 0, N'HN', N'qepub', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2018-06-29T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-29T03:45:47.9856937' AS DateTime2), CAST(N'2021-11-29T03:45:47.9856964' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'70a1cd96-416a-42e1-db90-08d9b2dfc5a8', N'LA000014', N'Laptop', 0, N'HN', N'ffyvd', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2018-06-29T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-29T03:47:59.9660869' AS DateTime2), CAST(N'2021-11-29T03:47:59.9660893' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'617b30d2-c8c2-427a-db91-08d9b2dfc5a8', N'LA000015', N'Laptop', 0, N'HN', N'afqnk', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2018-06-29T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-29T03:50:28.8104926' AS DateTime2), CAST(N'2021-11-29T03:50:28.8104952' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'20d1d2a2-9733-49c3-db92-08d9b2dfc5a8', N'LA000016', N'Laptop', 0, N'HN', N'wiwkn', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2018-06-29T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-29T03:51:45.4048441' AS DateTime2), CAST(N'2021-11-29T03:51:45.4048467' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'e9f78729-8085-49c8-db93-08d9b2dfc5a8', N'LA000017', N'a', 0, N'HN', N'a', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2010-06-28T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-29T03:53:25.4833143' AS DateTime2), CAST(N'2021-11-29T03:53:25.4833170' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'0fe93065-ef14-4f17-db94-08d9b2dfc5a8', N'LA000018', N'Laptop', 0, N'HN', N'beeef', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2018-06-29T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-29T03:54:40.5666466' AS DateTime2), CAST(N'2021-11-29T03:54:40.5666491' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'73d1864c-512c-4767-db95-08d9b2dfc5a8', N'LA000019', N'Laptop', 0, N'HN', N'zhjlr', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2018-06-29T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-29T03:57:41.9952982' AS DateTime2), CAST(N'2021-11-29T03:57:41.9953048' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'c0f019da-1608-4f82-db96-08d9b2dfc5a8', N'LA000020', N'Laptop', 0, N'HN', N'soghl', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2018-06-29T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-29T03:59:06.6689661' AS DateTime2), CAST(N'2021-11-29T03:59:06.6689678' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'170c5fff-4232-4fc4-db97-08d9b2dfc5a8', N'LA000021', N'Laptop', 0, N'HN', N'cdtov', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2018-06-29T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-29T04:05:48.6122349' AS DateTime2), CAST(N'2021-11-29T04:05:48.6122368' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'f93f0c47-60e5-4a82-db98-08d9b2dfc5a8', N'LA000022', N'laptop', 0, N'HN', N'a', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2322-06-27T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-29T04:06:22.8469238' AS DateTime2), CAST(N'2021-11-29T04:06:22.8469252' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'0bd74712-2afd-42cd-db99-08d9b2dfc5a8', N'LA000023', N'Laptop', 0, N'HN', N'dqxoh', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2018-06-29T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-29T04:07:36.8891190' AS DateTime2), CAST(N'2021-11-29T04:07:36.8891209' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'a4dfe974-013b-4965-db9a-08d9b2dfc5a8', N'LA000024', N'q', 0, N'HN', N'e', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2001-04-27T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-29T04:33:34.6671911' AS DateTime2), CAST(N'2021-11-29T04:33:34.6671926' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'7f325400-039a-48cf-db9c-08d9b2dfc5a8', N'LA000026', N'Laptop', 0, N'HN', N'qgqri', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2018-06-29T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-29T04:35:52.0215319' AS DateTime2), CAST(N'2021-11-29T04:35:52.0215335' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'7dac52a0-d0d4-40ec-db9d-08d9b2dfc5a8', N'LA000027', N'Laptop', 0, N'HN', N'gaori', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2018-06-29T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-29T04:36:34.3923672' AS DateTime2), CAST(N'2021-11-29T04:36:34.3923686' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'18575e53-1419-4283-db9e-08d9b2dfc5a8', N'LA000028', N'Laptop', 6, N'HN', N'gyikh', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2018-06-29T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-29T05:11:55.6605064' AS DateTime2), CAST(N'2021-11-29T05:11:55.6605080' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'bbe29192-6de0-45fc-db9f-08d9b2dfc5a8', N'LA000029', N'Laptop', 6, N'HN', N'zzwgd', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2018-06-29T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-29T05:12:48.5668615' AS DateTime2), CAST(N'2021-11-29T05:12:48.5668630' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'26685ec4-e1a2-499b-dba2-08d9b2dfc5a8', N'LA000032', N'ufmfp', 0, N'HN', N'oldsg', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2018-06-29T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-29T05:15:59.8961366' AS DateTime2), CAST(N'2021-11-29T05:15:59.8961384' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'14dcef03-5815-41c1-eb27-08d9b3054694', N'PC000002', N'pcdemo', 6, N'HN', N'asdasd', N'0981f275-1724-4d02-aa70-28ad6db846fc', CAST(N'2021-11-29T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-29T07:00:25.3068487' AS DateTime2), CAST(N'2021-11-29T07:00:25.3068575' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'eec4a256-b12c-45c6-222d-08d9b7a39d42', N'LA000033', N'adasd', 6, N'HN', N'asd', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2021-12-05T00:00:00.0000000' AS DateTime2), CAST(N'2021-12-05T10:59:19.5245182' AS DateTime2), CAST(N'2021-12-05T10:59:19.5246073' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'fe9197b1-affd-479c-13af-08d9b8a1e61f', N'MO000002', N'aasasdAhihih', 6, N'HN', N'asdd', N'268835b8-5be5-43c8-9de9-725ea80ce90f', CAST(N'2021-12-06T00:00:00.0000000' AS DateTime2), CAST(N'2021-12-06T17:19:33.9228624' AS DateTime2), CAST(N'2021-12-06T17:19:33.9229298' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'8755be9b-8a40-4e74-13b0-08d9b8a1e61f', N'MO000003', N'MOasdasd', 0, N'HN', N'asdasd', N'268835b8-5be5-43c8-9de9-725ea80ce90f', CAST(N'2021-12-06T00:00:00.0000000' AS DateTime2), CAST(N'2021-12-06T17:19:53.8022055' AS DateTime2), CAST(N'2021-12-06T17:19:53.8022088' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'6e297a51-4d9c-40b8-90a9-08d9b8a40994', N'LA000034', N'LaptopAsus', 6, N'HN', N'asasdsad', N'83fed793-2295-4c45-9f2a-00717f2681d0', CAST(N'2021-12-06T00:00:00.0000000' AS DateTime2), CAST(N'2021-12-06T17:34:52.4287688' AS DateTime2), CAST(N'2021-12-06T17:34:52.4288373' AS DateTime2), NULL, 1)
INSERT [dbo].[Asset] ([Id], [Code], [Name], [State], [Location], [Specification], [CategoryId], [InstalledDate], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'bee1c858-ea9d-4bc3-123a-08d9b956fdcc', N'MO000004', N'Testontop', 6, N'HN', N'asd', N'268835b8-5be5-43c8-9de9-725ea80ce90f', CAST(N'2021-12-07T00:00:00.0000000' AS DateTime2), CAST(N'2021-12-07T14:55:52.5744238' AS DateTime2), CAST(N'2021-12-07T14:55:52.5744836' AS DateTime2), NULL, 1)
GO
INSERT [dbo].[Assignment] ([Id], [AssignedDate], [State], [Note], [AssetID], [UserID], [RequestAssignmentId], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'35f62da8-72d9-4130-3911-08d9b8960e6a', CAST(N'2021-12-06T00:00:00.0000000' AS DateTime2), 2, N'asdsad', N'3b2ecdc6-d1c8-4364-c70d-08d9b0970e64', N'd45119c7-6e65-47db-b947-bc0280e88394', N'35f62da8-72d9-4130-3911-08d9b8960e6a', CAST(N'2021-12-06T16:05:42.8732493' AS DateTime2), CAST(N'2021-12-06T16:05:42.8732496' AS DateTime2), N'd45119c7-6e65-47db-b947-bc0280e88394', 0)
INSERT [dbo].[Assignment] ([Id], [AssignedDate], [State], [Note], [AssetID], [UserID], [RequestAssignmentId], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'45ffc2f8-83ba-4742-3912-08d9b8960e6a', CAST(N'2021-12-06T00:00:00.0000000' AS DateTime2), 2, N'asd', N'14dcef03-5815-41c1-eb27-08d9b3054694', N'd45119c7-6e65-47db-b947-bc0280e88394', N'45ffc2f8-83ba-4742-3912-08d9b8960e6a', CAST(N'2021-12-06T16:06:00.9071578' AS DateTime2), CAST(N'2021-12-06T16:06:00.9071583' AS DateTime2), N'd45119c7-6e65-47db-b947-bc0280e88394', 0)
INSERT [dbo].[Assignment] ([Id], [AssignedDate], [State], [Note], [AssetID], [UserID], [RequestAssignmentId], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'3a255618-31b9-4854-3913-08d9b8960e6a', CAST(N'2021-12-06T00:00:00.0000000' AS DateTime2), 2, N'asd', N'eec4a256-b12c-45c6-222d-08d9b7a39d42', N'd45119c7-6e65-47db-b947-bc0280e88394', N'3a255618-31b9-4854-3913-08d9b8960e6a', CAST(N'2021-12-06T16:06:17.0687308' AS DateTime2), CAST(N'2021-12-06T16:06:17.0687317' AS DateTime2), N'd45119c7-6e65-47db-b947-bc0280e88394', 0)
INSERT [dbo].[Assignment] ([Id], [AssignedDate], [State], [Note], [AssetID], [UserID], [RequestAssignmentId], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'7683da53-5313-4151-3914-08d9b8960e6a', CAST(N'2021-12-06T00:00:00.0000000' AS DateTime2), 2, N'asd', N'26685ec4-e1a2-499b-dba2-08d9b2dfc5a8', N'd45119c7-6e65-47db-b947-bc0280e88394', N'7683da53-5313-4151-3914-08d9b8960e6a', CAST(N'2021-12-06T16:06:31.0219407' AS DateTime2), CAST(N'2021-12-06T16:06:31.0219411' AS DateTime2), N'd45119c7-6e65-47db-b947-bc0280e88394', 0)
INSERT [dbo].[Assignment] ([Id], [AssignedDate], [State], [Note], [AssetID], [UserID], [RequestAssignmentId], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'f9a0a887-ee60-402a-3915-08d9b8960e6a', CAST(N'2021-12-06T00:00:00.0000000' AS DateTime2), 2, N'asd', N'bbe29192-6de0-45fc-db9f-08d9b2dfc5a8', N'd45119c7-6e65-47db-b947-bc0280e88394', N'f9a0a887-ee60-402a-3915-08d9b8960e6a', CAST(N'2021-12-06T16:06:43.6697286' AS DateTime2), CAST(N'2021-12-06T16:06:43.6697289' AS DateTime2), N'd45119c7-6e65-47db-b947-bc0280e88394', 0)
INSERT [dbo].[Assignment] ([Id], [AssignedDate], [State], [Note], [AssetID], [UserID], [RequestAssignmentId], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'be923a09-c8e3-4224-3916-08d9b8960e6a', CAST(N'2021-12-06T00:00:00.0000000' AS DateTime2), 2, N'asdsad', N'a4dfe974-013b-4965-db9a-08d9b2dfc5a8', N'd45119c7-6e65-47db-b947-bc0280e88394', N'be923a09-c8e3-4224-3916-08d9b8960e6a', CAST(N'2021-12-06T16:06:57.5614447' AS DateTime2), CAST(N'2021-12-06T16:06:57.5614451' AS DateTime2), N'd45119c7-6e65-47db-b947-bc0280e88394', 0)
INSERT [dbo].[Assignment] ([Id], [AssignedDate], [State], [Note], [AssetID], [UserID], [RequestAssignmentId], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'8b1ccba6-e268-45cf-3917-08d9b8960e6a', CAST(N'2021-12-06T00:00:00.0000000' AS DateTime2), 2, N'sadasd', N'7dac52a0-d0d4-40ec-db9d-08d9b2dfc5a8', N'd45119c7-6e65-47db-b947-bc0280e88394', N'8b1ccba6-e268-45cf-3917-08d9b8960e6a', CAST(N'2021-12-06T16:07:31.7958764' AS DateTime2), CAST(N'2021-12-06T16:07:31.7958767' AS DateTime2), N'd45119c7-6e65-47db-b947-bc0280e88394', 0)
INSERT [dbo].[Assignment] ([Id], [AssignedDate], [State], [Note], [AssetID], [UserID], [RequestAssignmentId], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'9c71ff19-2a0b-43bf-3918-08d9b8960e6a', CAST(N'2021-12-06T00:00:00.0000000' AS DateTime2), 2, N'zxczxc', N'7f325400-039a-48cf-db9c-08d9b2dfc5a8', N'd45119c7-6e65-47db-b947-bc0280e88394', N'9c71ff19-2a0b-43bf-3918-08d9b8960e6a', CAST(N'2021-12-06T16:07:49.5220460' AS DateTime2), CAST(N'2021-12-06T16:07:49.5220465' AS DateTime2), N'd45119c7-6e65-47db-b947-bc0280e88394', 0)
INSERT [dbo].[Assignment] ([Id], [AssignedDate], [State], [Note], [AssetID], [UserID], [RequestAssignmentId], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'9d34580b-3a05-4556-51ec-08d9b8999bf6', CAST(N'2021-12-06T00:00:00.0000000' AS DateTime2), 2, N'zxczxc', N'14dcef03-5815-41c1-eb27-08d9b3054694', N'60955217-9c4a-4e05-bf9d-5479f518040b', N'9d34580b-3a05-4556-51ec-08d9b8999bf6', CAST(N'2021-12-06T16:20:13.5423287' AS DateTime2), CAST(N'2021-12-06T16:20:13.5423889' AS DateTime2), N'd45119c7-6e65-47db-b947-bc0280e88394', 0)
INSERT [dbo].[Assignment] ([Id], [AssignedDate], [State], [Note], [AssetID], [UserID], [RequestAssignmentId], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'31fd9715-13e8-4439-8567-08d9b8a41669', CAST(N'2021-12-06T00:00:00.0000000' AS DateTime2), 2, N'AAs', N'6e297a51-4d9c-40b8-90a9-08d9b8a40994', N'd45119c7-6e65-47db-b947-bc0280e88394', N'31fd9715-13e8-4439-8567-08d9b8a41669', CAST(N'2021-12-06T17:35:13.9732059' AS DateTime2), CAST(N'2021-12-06T17:35:13.9732088' AS DateTime2), N'd45119c7-6e65-47db-b947-bc0280e88394', 0)
INSERT [dbo].[Assignment] ([Id], [AssignedDate], [State], [Note], [AssetID], [UserID], [RequestAssignmentId], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'59617569-4d9b-442b-8568-08d9b8a41669', CAST(N'2021-12-06T00:00:00.0000000' AS DateTime2), 2, N'sadasd', N'8755be9b-8a40-4e74-13b0-08d9b8a1e61f', N'd45119c7-6e65-47db-b947-bc0280e88394', N'59617569-4d9b-442b-8568-08d9b8a41669', CAST(N'2021-12-06T17:36:02.0413341' AS DateTime2), CAST(N'2021-12-06T17:36:02.0413345' AS DateTime2), N'd45119c7-6e65-47db-b947-bc0280e88394', 0)
INSERT [dbo].[Assignment] ([Id], [AssignedDate], [State], [Note], [AssetID], [UserID], [RequestAssignmentId], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'8a9e9539-5885-46df-7714-08d9b8a54576', CAST(N'2021-12-06T00:00:00.0000000' AS DateTime2), 2, N'aasd', N'fe9197b1-affd-479c-13af-08d9b8a1e61f', N'60955217-9c4a-4e05-bf9d-5479f518040b', N'8a9e9539-5885-46df-7714-08d9b8a54576', CAST(N'2021-12-06T17:43:42.3776981' AS DateTime2), CAST(N'2021-12-06T17:43:42.3777660' AS DateTime2), N'd45119c7-6e65-47db-b947-bc0280e88394', 0)
INSERT [dbo].[Assignment] ([Id], [AssignedDate], [State], [Note], [AssetID], [UserID], [RequestAssignmentId], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'8a60472d-e724-4f79-2f52-08d9b8d6cd1e', CAST(N'2021-12-06T00:00:00.0000000' AS DateTime2), 2, N'sd', N'3b2ecdc6-d1c8-4364-c70d-08d9b0970e64', N'd45119c7-6e65-47db-b947-bc0280e88394', N'8a60472d-e724-4f79-2f52-08d9b8d6cd1e', CAST(N'2021-12-06T23:38:15.3151742' AS DateTime2), CAST(N'2021-12-06T23:38:15.3152200' AS DateTime2), N'd45119c7-6e65-47db-b947-bc0280e88394', 1)
INSERT [dbo].[Assignment] ([Id], [AssignedDate], [State], [Note], [AssetID], [UserID], [RequestAssignmentId], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'ccf29044-1633-441d-5dcb-08d9b8ded02a', CAST(N'2021-12-07T00:00:00.0000000' AS DateTime2), 2, N'zxcxz', N'6e297a51-4d9c-40b8-90a9-08d9b8a40994', N'd45119c7-6e65-47db-b947-bc0280e88394', N'ccf29044-1633-441d-5dcb-08d9b8ded02a', CAST(N'2021-12-07T00:35:36.4009120' AS DateTime2), CAST(N'2021-12-07T00:35:36.4009779' AS DateTime2), N'd45119c7-6e65-47db-b947-bc0280e88394', 1)
INSERT [dbo].[Assignment] ([Id], [AssignedDate], [State], [Note], [AssetID], [UserID], [RequestAssignmentId], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'425abda2-bab7-4d8a-0b48-08d9b932ceb7', CAST(N'2021-12-07T00:00:00.0000000' AS DateTime2), 2, N'asdasd', N'eec4a256-b12c-45c6-222d-08d9b7a39d42', N'd45119c7-6e65-47db-b947-bc0280e88394', N'425abda2-bab7-4d8a-0b48-08d9b932ceb7', CAST(N'2021-12-07T10:36:51.6875367' AS DateTime2), CAST(N'2021-12-07T10:36:51.6876081' AS DateTime2), N'd45119c7-6e65-47db-b947-bc0280e88394', 1)
INSERT [dbo].[Assignment] ([Id], [AssignedDate], [State], [Note], [AssetID], [UserID], [RequestAssignmentId], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'6c43f05c-8e6a-4c39-4d49-08d9b96517f1', CAST(N'2021-12-07T00:00:00.0000000' AS DateTime2), 2, N'asdas', N'bee1c858-ea9d-4bc3-123a-08d9b956fdcc', N'60955217-9c4a-4e05-bf9d-5479f518040b', N'6c43f05c-8e6a-4c39-4d49-08d9b96517f1', CAST(N'2021-12-07T16:36:49.3857643' AS DateTime2), CAST(N'2021-12-07T16:36:49.3858613' AS DateTime2), N'd45119c7-6e65-47db-b947-bc0280e88394', 0)
INSERT [dbo].[Assignment] ([Id], [AssignedDate], [State], [Note], [AssetID], [UserID], [RequestAssignmentId], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'f3ca997b-7352-4c2a-427d-08da276c2cae', CAST(N'2022-04-26T00:00:00.0000000' AS DateTime2), 3, N'ee', N'bbe29192-6de0-45fc-db9f-08d9b2dfc5a8', N'5ec724d4-99b1-4d85-b519-308d4e028b83', NULL, CAST(N'2022-04-26T17:04:38.5180931' AS DateTime2), CAST(N'2022-04-26T17:04:38.5182354' AS DateTime2), N'd45119c7-6e65-47db-b947-bc0280e88394', 1)
INSERT [dbo].[Assignment] ([Id], [AssignedDate], [State], [Note], [AssetID], [UserID], [RequestAssignmentId], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'7cca0025-1ccd-42aa-427e-08da276c2cae', CAST(N'2022-04-26T00:00:00.0000000' AS DateTime2), 3, N'sads', N'bee1c858-ea9d-4bc3-123a-08d9b956fdcc', N'5ec724d4-99b1-4d85-b519-308d4e028b83', NULL, CAST(N'2022-04-26T17:05:14.9856948' AS DateTime2), CAST(N'2022-04-26T17:05:14.9856960' AS DateTime2), N'd45119c7-6e65-47db-b947-bc0280e88394', 1)
INSERT [dbo].[Assignment] ([Id], [AssignedDate], [State], [Note], [AssetID], [UserID], [RequestAssignmentId], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'220a2304-f3d3-400d-53f8-08da2770f4dd', CAST(N'2022-04-26T00:00:00.0000000' AS DateTime2), 2, N'dssd', N'14dcef03-5815-41c1-eb27-08d9b3054694', N'2c7b5235-ad54-4803-af3f-87856582f9ac', NULL, CAST(N'2022-04-26T17:38:52.3691967' AS DateTime2), CAST(N'2022-04-26T17:38:52.3693596' AS DateTime2), N'd45119c7-6e65-47db-b947-bc0280e88394', 1)
INSERT [dbo].[Assignment] ([Id], [AssignedDate], [State], [Note], [AssetID], [UserID], [RequestAssignmentId], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'eb439f78-3b73-4232-53f9-08da2770f4dd', CAST(N'2022-04-26T00:00:00.0000000' AS DateTime2), 2, N'dsfs', N'fe9197b1-affd-479c-13af-08d9b8a1e61f', N'2c7b5235-ad54-4803-af3f-87856582f9ac', N'eb439f78-3b73-4232-53f9-08da2770f4dd', CAST(N'2022-04-26T17:39:05.5151190' AS DateTime2), CAST(N'2022-04-26T17:39:05.5151209' AS DateTime2), N'd45119c7-6e65-47db-b947-bc0280e88394', 1)
INSERT [dbo].[Assignment] ([Id], [AssignedDate], [State], [Note], [AssetID], [UserID], [RequestAssignmentId], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'c38b6cc0-8989-4b1d-53fa-08da2770f4dd', CAST(N'2022-04-26T00:00:00.0000000' AS DateTime2), 2, N'ddfg', N'18575e53-1419-4283-db9e-08d9b2dfc5a8', N'2c7b5235-ad54-4803-af3f-87856582f9ac', NULL, CAST(N'2022-04-26T17:39:19.0659170' AS DateTime2), CAST(N'2022-04-26T17:39:19.0659184' AS DateTime2), N'd45119c7-6e65-47db-b947-bc0280e88394', 1)
GO
INSERT [dbo].[Category] ([Id], [Name], [Prefix], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'83fed793-2295-4c45-9f2a-00717f2681d0', N'Laptop', N'LA', CAST(N'2021-11-26T08:42:30.0977684' AS DateTime2), CAST(N'2021-11-26T08:42:30.0988295' AS DateTime2), NULL, 1)
INSERT [dbo].[Category] ([Id], [Name], [Prefix], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'0981f275-1724-4d02-aa70-28ad6db846fc', N'Personal Computer', N'PC', CAST(N'2021-11-26T08:42:30.0989046' AS DateTime2), CAST(N'2021-11-26T08:42:30.0989047' AS DateTime2), NULL, 1)
INSERT [dbo].[Category] ([Id], [Name], [Prefix], [CreatedDate], [UpdatedDate], [CreatorId], [Pubished]) VALUES (N'268835b8-5be5-43c8-9de9-725ea80ce90f', N'Monitor', N'MO', CAST(N'2021-11-26T08:42:30.0989037' AS DateTime2), CAST(N'2021-11-26T08:42:30.0989043' AS DateTime2), NULL, 1)
GO
INSERT [dbo].[RequestAssignment] ([Id], [ReturnDate], [State], [UserRequestId], [UserAcceptId]) VALUES (N'35f62da8-72d9-4130-3911-08d9b8960e6a', CAST(N'2021-12-06T16:09:36.7745880' AS DateTime2), 7, N'd45119c7-6e65-47db-b947-bc0280e88394', N'd45119c7-6e65-47db-b947-bc0280e88394')
INSERT [dbo].[RequestAssignment] ([Id], [ReturnDate], [State], [UserRequestId], [UserAcceptId]) VALUES (N'45ffc2f8-83ba-4742-3912-08d9b8960e6a', CAST(N'2021-12-06T16:09:39.2782454' AS DateTime2), 7, N'd45119c7-6e65-47db-b947-bc0280e88394', N'd45119c7-6e65-47db-b947-bc0280e88394')
INSERT [dbo].[RequestAssignment] ([Id], [ReturnDate], [State], [UserRequestId], [UserAcceptId]) VALUES (N'3a255618-31b9-4854-3913-08d9b8960e6a', CAST(N'2021-12-06T16:09:41.6100874' AS DateTime2), 7, N'd45119c7-6e65-47db-b947-bc0280e88394', N'd45119c7-6e65-47db-b947-bc0280e88394')
INSERT [dbo].[RequestAssignment] ([Id], [ReturnDate], [State], [UserRequestId], [UserAcceptId]) VALUES (N'7683da53-5313-4151-3914-08d9b8960e6a', CAST(N'2021-12-06T16:09:43.7968043' AS DateTime2), 7, N'd45119c7-6e65-47db-b947-bc0280e88394', N'd45119c7-6e65-47db-b947-bc0280e88394')
INSERT [dbo].[RequestAssignment] ([Id], [ReturnDate], [State], [UserRequestId], [UserAcceptId]) VALUES (N'f9a0a887-ee60-402a-3915-08d9b8960e6a', CAST(N'2021-12-06T16:09:52.1787277' AS DateTime2), 7, N'd45119c7-6e65-47db-b947-bc0280e88394', N'd45119c7-6e65-47db-b947-bc0280e88394')
INSERT [dbo].[RequestAssignment] ([Id], [ReturnDate], [State], [UserRequestId], [UserAcceptId]) VALUES (N'be923a09-c8e3-4224-3916-08d9b8960e6a', CAST(N'2021-12-06T16:09:57.9316553' AS DateTime2), 7, N'd45119c7-6e65-47db-b947-bc0280e88394', N'd45119c7-6e65-47db-b947-bc0280e88394')
INSERT [dbo].[RequestAssignment] ([Id], [ReturnDate], [State], [UserRequestId], [UserAcceptId]) VALUES (N'8b1ccba6-e268-45cf-3917-08d9b8960e6a', CAST(N'2021-12-06T16:10:00.4975663' AS DateTime2), 7, N'd45119c7-6e65-47db-b947-bc0280e88394', N'd45119c7-6e65-47db-b947-bc0280e88394')
INSERT [dbo].[RequestAssignment] ([Id], [ReturnDate], [State], [UserRequestId], [UserAcceptId]) VALUES (N'9c71ff19-2a0b-43bf-3918-08d9b8960e6a', CAST(N'2021-12-06T16:10:16.7767051' AS DateTime2), 7, N'd45119c7-6e65-47db-b947-bc0280e88394', N'd45119c7-6e65-47db-b947-bc0280e88394')
INSERT [dbo].[RequestAssignment] ([Id], [ReturnDate], [State], [UserRequestId], [UserAcceptId]) VALUES (N'9d34580b-3a05-4556-51ec-08d9b8999bf6', CAST(N'2021-12-09T09:38:34.4509811' AS DateTime2), 7, N'd45119c7-6e65-47db-b947-bc0280e88394', N'd45119c7-6e65-47db-b947-bc0280e88394')
INSERT [dbo].[RequestAssignment] ([Id], [ReturnDate], [State], [UserRequestId], [UserAcceptId]) VALUES (N'31fd9715-13e8-4439-8567-08d9b8a41669', CAST(N'2021-12-06T17:35:36.7024178' AS DateTime2), 7, N'd45119c7-6e65-47db-b947-bc0280e88394', N'd45119c7-6e65-47db-b947-bc0280e88394')
INSERT [dbo].[RequestAssignment] ([Id], [ReturnDate], [State], [UserRequestId], [UserAcceptId]) VALUES (N'59617569-4d9b-442b-8568-08d9b8a41669', CAST(N'2021-12-09T09:38:37.2394945' AS DateTime2), 7, N'd45119c7-6e65-47db-b947-bc0280e88394', N'd45119c7-6e65-47db-b947-bc0280e88394')
INSERT [dbo].[RequestAssignment] ([Id], [ReturnDate], [State], [UserRequestId], [UserAcceptId]) VALUES (N'8a9e9539-5885-46df-7714-08d9b8a54576', CAST(N'2021-12-09T09:40:19.6944723' AS DateTime2), 7, N'd45119c7-6e65-47db-b947-bc0280e88394', N'd45119c7-6e65-47db-b947-bc0280e88394')
INSERT [dbo].[RequestAssignment] ([Id], [ReturnDate], [State], [UserRequestId], [UserAcceptId]) VALUES (N'8a60472d-e724-4f79-2f52-08d9b8d6cd1e', NULL, 8, N'd45119c7-6e65-47db-b947-bc0280e88394', N'00000000-0000-0000-0000-000000000000')
INSERT [dbo].[RequestAssignment] ([Id], [ReturnDate], [State], [UserRequestId], [UserAcceptId]) VALUES (N'ccf29044-1633-441d-5dcb-08d9b8ded02a', NULL, 8, N'd45119c7-6e65-47db-b947-bc0280e88394', N'00000000-0000-0000-0000-000000000000')
INSERT [dbo].[RequestAssignment] ([Id], [ReturnDate], [State], [UserRequestId], [UserAcceptId]) VALUES (N'425abda2-bab7-4d8a-0b48-08d9b932ceb7', NULL, 8, N'd45119c7-6e65-47db-b947-bc0280e88394', N'00000000-0000-0000-0000-000000000000')
INSERT [dbo].[RequestAssignment] ([Id], [ReturnDate], [State], [UserRequestId], [UserAcceptId]) VALUES (N'6c43f05c-8e6a-4c39-4d49-08d9b96517f1', CAST(N'2021-12-09T09:40:38.8040715' AS DateTime2), 7, N'd45119c7-6e65-47db-b947-bc0280e88394', N'd45119c7-6e65-47db-b947-bc0280e88394')
INSERT [dbo].[RequestAssignment] ([Id], [ReturnDate], [State], [UserRequestId], [UserAcceptId]) VALUES (N'eb439f78-3b73-4232-53f9-08da2770f4dd', NULL, 8, N'2c7b5235-ad54-4803-af3f-87856582f9ac', N'00000000-0000-0000-0000-000000000000')
GO
ALTER TABLE [dbo].[Asset]  WITH CHECK ADD  CONSTRAINT [FK_Asset_Category_CategoryId] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Category] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Asset] CHECK CONSTRAINT [FK_Asset_Category_CategoryId]
GO
ALTER TABLE [dbo].[Assignment]  WITH CHECK ADD  CONSTRAINT [FK_Assignment_Asset_AssetID] FOREIGN KEY([AssetID])
REFERENCES [dbo].[Asset] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Assignment] CHECK CONSTRAINT [FK_Assignment_Asset_AssetID]
GO
ALTER TABLE [dbo].[Assignment]  WITH CHECK ADD  CONSTRAINT [FK_Assignment_RequestAssignment_RequestAssignmentId] FOREIGN KEY([RequestAssignmentId])
REFERENCES [dbo].[RequestAssignment] ([Id])
GO
ALTER TABLE [dbo].[Assignment] CHECK CONSTRAINT [FK_Assignment_RequestAssignment_RequestAssignmentId]
GO
