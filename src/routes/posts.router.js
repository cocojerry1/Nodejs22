// src/routes/posts.router.js

import express from 'express';
import { prisma } from '../utils/prisma/index.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import { asyncMiddleware } from '../middlewares/asyn.middleware.js';

const router = express.Router();

/** 게시글 생성 API **/
router.post('/posts', authMiddleware, async (req, res, next) => {
  const { userId } = req.user;
  const { title, content } = req.body;

  const post = await prisma.posts.create({
    data: {
      userId: +userId,
      title,
      content,
    },
  });

  return res.status(201).json({ data: post });
});

// src/routes/posts.router.js

// src/routes/posts.router.js

/** 게시글 목록 조회 API **/
router.get('/posts', async (req, res, next) => {
  const { orderKey = 'createdAt', orderValue = 'DESC' } = req.query;
  console.log(orderKey, orderValue);

  const normalizedOrderValue = (orderValue && orderValue.toUpperCase() === 'ASC') ? 'asc' : 'desc';

  let orderByCondition = {};
  orderByCondition[orderKey] = normalizedOrderValue;

  try {
    const posts = await prisma.posts.findMany({
      select: {
        content: true,
        postId: true,
        title: true,
        status: true,
        createdAt: true,
        user: {
          select: {
            name: true,
          },
        },
      },
      orderBy: orderByCondition,
    });

    return res.status(200).json({ data: posts });
  } catch (error) {
    next(error); // 에러 처리
  }
});




/** 게시글 상세 조회 API **/
router.get('/posts/:postId', async (req, res, next) => {
    const { postId } = req.params;
    const post = await prisma.posts.findFirst({
      where: {
        postId: +postId,
      },
      select: {
        content:true,
        postId:true,
        title:true,
        status:true,
        createdAt :true,
      user: {
        select: {
            name:true,
        },
      },
    },
    });
  
    return res.status(200).json({ data: post });
  });

  // 게시물 수정하기

  router.patch('/posts/:postId', authMiddleware,asyncMiddleware(async (req, res) => {
    const { postId } = req.params;
    const { title, content, status } = req.body;
   

    if (!req.user || !req.user.userId) {
      return res.status(401).json({ errorMessage: "인증 정보가 없습니다." });
    }
    const userId = req.user.userId;
    

      const post = await prisma.posts.findUnique({ where: { postId: Number(postId) } });
  if (!post) {
    return res.status(404).json({ errorMessage: "게시글 조회에 실패하였습니다." });
  }
  if (post.userId !== userId) {
    return res.status(403).json({ errorMessage: "수정 권한이 없습니다." });
  }


    if (title) post.title = title;
    if (content) post.content = content;
    if (status) post.status = status;


    const updatepost = {
      title: post.title,
      content:post.content,
      status: post.status,
    };

    return res.status(200).json({ updatepost });
  }));

  
  // 게시물 삭제하기

  router.delete('/posts/:postId', authMiddleware,asyncMiddleware(async (req, res) => {
    const { postId } = req.params;
   

    if (!req.user || !req.user.userId) {
      return res.status(401).json({ errorMessage: "인증 정보가 없습니다." });
    }
    const userId = req.user.userId;
    

      const post = await prisma.posts.findUnique({ where: { postId: Number(postId) } });
  if (!post) {
    return res.status(404).json({ errorMessage: "이력서 조회에 실패하였습니다." });
  }
  if (post.userId !== userId) {
    return res.status(403).json({ errorMessage: "수정 권한이 없습니다." });
  }

  await prisma.posts.delete({ where: { postId: Number(postId) } });

  

  
    return res.status(200).json({  });
  }));


export default router;


